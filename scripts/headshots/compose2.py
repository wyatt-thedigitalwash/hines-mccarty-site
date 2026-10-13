"""D118, reworked (D119). Put each headshot on the navy background recreated
from David Hines's, with natural edges. Three steps, macOS only:

  python3 scripts/headshots/stage.py public/headshots <dir>     4:5 crops, 960x1200
  swiftc -O scripts/headshots/fgmask.swift -o /tmp/fgmask
  /tmp/fgmask <dir>/<stem>.png <dir>/<stem>_fg.png              per photo
  python3 scripts/headshots/compose2.py <dir> <dir>             <stem>.jpg

fgmask is Apple's subject cutout (Vision foreground instance mask), run on the
output-size crop. compose2 refines the matte with a guided filter, takes edge
colour from inside the person, wraps a little background light into the
edges, and adds one grain over the whole frame. Needs numpy, scipy, Pillow.
Outputs are committed as public/headshots/*_Portrait.jpg."""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

STAGE, OUT = sys.argv[1:3]
OW, OH = 960, 1200
STOPS = [(0.0, (6, 26, 46)), (0.1, (9, 36, 58)), (0.2, (15, 44, 66)), (0.3, (20, 51, 75)),
         (0.45, (34, 67, 92)), (0.6, (51, 85, 111)), (0.8, (60, 97, 125)), (1.0, (64, 103, 132))]

def background():
    ys = np.linspace(0, 1, OH)
    col = np.stack([np.interp(ys, [s for s, _ in STOPS], [c[i] for _, c in STOPS]) for i in range(3)], -1)
    img = np.repeat(col[:, None, :], OW, 1)
    xs = np.linspace(-1, 1, OW)
    return img * (1 - 0.13 * xs ** 2)[None, :, None]

def box(x, r):
    return ndimage.uniform_filter(x, size=2 * r + 1, mode="reflect")

def guided(I, p, r, eps):
    """He et al. guided filter, gray guide: an edge-aware smoothing of the
    matte that snaps it to the photo's own edges."""
    mI, mp = box(I, r), box(p, r)
    cov = box(I * p, r) - mI * mp
    var = box(I * I, r) - mI * mI
    a = cov / (var + eps)
    b = mp - a * mI
    return box(a, r) * I + box(b, r)

def spread(color, weight, sigma):
    """Fill each pixel with the nearby colour of `weight`-ed pixels."""
    num = ndimage.gaussian_filter(color * weight[..., None], (sigma, sigma, 0))
    den = ndimage.gaussian_filter(weight, sigma)[..., None]
    return num / np.maximum(den, 1e-6)

# Per photo: how far to pull the edge in (px at output size) and where the
# matte starts. Maria's light hair against her old light-gray background
# reads as partly hair; Colton's source carries a dark outline from an
# earlier cutout. Lily's dark background needed neither.
TUNE = {
    "LilyMcCarty_Headshot": (0, 0.08),
    "MariaPavlidis_Headshot": (4, 0.22),
    "ColtonTrina_Headshot": (5, 0.15),
}

for stem, (shrink, floor) in TUNE.items():
    I = np.asarray(Image.open(f"{STAGE}/{stem}.png").convert("RGB")).astype(float)
    m = np.asarray(Image.open(f"{STAGE}/{stem}_fg.png").convert("L")).astype(float) / 255
    m = np.maximum(m, ndimage.binary_fill_holes(m > 0.5).astype(float))
    gray = I.mean(-1) / 255

    if stem.startswith("Maria"):
        # Her old background is a light, neutral gray; her hair is warm. Near
        # the outline, drop pixels that are light and nearly colourless: those
        # are gaps of old background the cutout counted as her. Her white
        # blouse sits far inside the outline, beyond this band.
        sat = I.max(-1) - I.min(-1)
        neutral_light = (sat < 28) & (I.mean(-1) > 150)
        band = ndimage.binary_dilation(m < 0.5, iterations=45) & (m > 0)
        m = np.where(neutral_light & band, 0.0, m)
        m = ndimage.median_filter(m, size=5)

    # 1. Edge-aware refinement: a coarse pass for the outline, a fine pass so
    #    hair keeps its strands. Then a gentle contrast curve on the matte.
    a = guided(gray, m, 10, 1e-3)
    a = guided(gray, a, 3, 1e-4)
    a = np.clip(a, 0, 1)
    if shrink:
        a = ndimage.grey_erosion(a, size=(2 * shrink + 1, 2 * shrink + 1))
        a = ndimage.gaussian_filter(a, shrink / 2.5)
    a = np.clip((a - floor) / (0.92 - floor), 0, 1)
    a = a * a * (3 - 2 * a)  # smoothstep: soft but no grey haze
    a = ndimage.gaussian_filter(a, 0.6)

    # 2. Edge colour: inside the band where the matte is partial, take the
    #    person's colour from just inside the edge rather than the original
    #    pixel, which still carries the old background (the light or dark rim).
    core = (a > 0.97).astype(float)
    inner = spread(I, core, 4)
    t = np.clip((a - 0.5) / 0.47, 0, 1)[..., None]  # 1 deep inside, 0 at the rim
    F = I * t + inner * (1 - t)

    # 3. Composite, then a light wrap: the blurred background bleeds a little
    #    into the outer edge, as real light does, so the person sits in it.
    B = background()
    comp = F * a[..., None] + B * (1 - a[..., None])
    wrap = ndimage.gaussian_filter(B, (14, 14, 0))
    rim = np.clip(a * (1 - ndimage.gaussian_filter(a, 6)) * 2.2, 0, 1)[..., None]
    comp = comp * (1 - 0.35 * rim) + wrap * 0.35 * rim

    # 4. One grain over everything, so subject and background share a texture.
    rng = np.random.default_rng(11)
    comp += rng.normal(0, 2.0, comp.shape)
    Image.fromarray(np.clip(comp, 0, 255).astype(np.uint8)).save(f"{OUT}/{stem}.jpg", quality=92)
    print("wrote", stem)
