"""D118. Put each headshot on a background matching David Hines's (navy-blue,
darker at the top), re-cropped to the site's 4:5 head-and-shoulders frame.

  swiftc -O scripts/headshots/mask.swift -o /tmp/mask
  /tmp/mask public/headshots/<name> <mask dir>/<stem>_mask.png   (each photo)
  python3 scripts/headshots/compose.py public/headshots <mask dir> <out dir>

mask.swift uses Apple's Vision person segmentation (macOS only, no download).
Needs numpy, scipy and Pillow. Outputs are committed as *_navy.jpg; the
originals stay beside them. Not part of the build."""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

SRC, MASKS, OUT = sys.argv[1:4]
OW, OH = 960, 1200  # 4:5, the site's portrait frame

# David's background, sampled down the frame (fraction of height -> RGB).
STOPS = [(0.0, (6, 26, 46)), (0.1, (9, 36, 58)), (0.2, (15, 44, 66)), (0.3, (20, 51, 75)),
         (0.45, (34, 67, 92)), (0.6, (51, 85, 111)), (0.8, (60, 97, 125)), (1.0, (64, 103, 132))]

def background():
    ys = np.linspace(0, 1, OH)
    col = np.stack([np.interp(ys, [s for s, _ in STOPS], [c[i] for _, c in STOPS]) for i in range(3)], -1)
    img = np.repeat(col[:, None, :], OW, 1)
    xs = np.linspace(-1, 1, OW)
    vign = 1 - 0.13 * xs ** 2  # sides a touch darker, as in David's
    img = img * vign[None, :, None]
    rng = np.random.default_rng(7)
    img += rng.normal(0, 1.6, img.shape)  # fine grain, so the gradient does not band
    return img

# Crop windows in source pixels: (x0, y0, width, height); 4:5 each. May run
# past the source edge, where only background shows.
CROPS = {
    "LilyMcCarty_Headshot.png": (94, -4, 336, 420),
    "ColtonTrina_Headshot.png": (110, -23, 377, 471),
    "MariaPavlidis_Headshot.jpg": (0, 0, 1200, 1500),
}

def fill_holes(a):
    solid = ndimage.binary_fill_holes(a > 0.5)
    return np.maximum(a, solid.astype(float))

for name, (x0, y0, w, h) in CROPS.items():
    src = np.asarray(Image.open(f"{SRC}/{name}").convert("RGB")).astype(float)
    a = np.asarray(Image.open(f"{MASKS}/{name.rsplit('.', 1)[0]}_mask.png").convert("L")).astype(float) / 255
    a = fill_holes(a)  # the tie, buttons: holes the segmenter left inside the person
    # Light backgrounds (Colton's white, Maria's gray) leave a bright rim:
    # pull the edge in by a pixel or two before the soft edge is tightened.
    if name.startswith(("Colton", "Maria")):
        a = ndimage.grey_erosion(a, size=(5, 5))
        a = ndimage.gaussian_filter(a, 0.8)
    if name.startswith("Colton"):
        # His source was already cut out onto white, with a speckled rim.
        # Drop anything bright and nearly white at the edge.
        near_white = (src.min(-1) > 200) & (a < 0.98)
        a[near_white] = 0
        a = ndimage.gaussian_filter(a, 0.7)
    a = np.clip((a - 0.12) / 0.88, 0, 1)  # tighten the soft edge a little
    # Strip the old background out of edge pixels: estimate it by spreading
    # the pure-background pixels inward, then solve I = aF + (1-a)B for F.
    bgw = (a < 0.05).astype(float)
    num = ndimage.gaussian_filter(src * bgw[..., None], (25, 25, 0))
    den = ndimage.gaussian_filter(bgw, 25)[..., None] + 1e-6
    old = num / den
    fg = np.where(a[..., None] > 0.03, (src - (1 - a[..., None]) * old) / np.maximum(a[..., None], 0.03), src)
    fg = np.clip(fg, 0, 255)

    # Place the crop window into the output frame.
    sx = OW / w
    pw, ph = int(round(src.shape[1] * sx)), int(round(src.shape[0] * sx))
    fgi = np.asarray(Image.fromarray(fg.astype(np.uint8)).resize((pw, ph), Image.LANCZOS)).astype(float)
    ai = np.asarray(Image.fromarray((a * 255).astype(np.uint8)).resize((pw, ph), Image.LANCZOS)).astype(float) / 255
    ox, oy = int(round(-x0 * sx)), int(round(-y0 * sx))
    out = background()
    F = np.zeros_like(out); A = np.zeros((OH, OW))
    ys0, xs0 = max(0, oy), max(0, ox)
    ys1, xs1 = min(OH, oy + ph), min(OW, ox + pw)
    F[ys0:ys1, xs0:xs1] = fgi[ys0 - oy:ys1 - oy, xs0 - ox:xs1 - ox]
    A[ys0:ys1, xs0:xs1] = ai[ys0 - oy:ys1 - oy, xs0 - ox:xs1 - ox]
    comp = F * A[..., None] + out * (1 - A[..., None])
    Image.fromarray(np.clip(comp, 0, 255).astype(np.uint8)).save(f"{OUT}/{name.rsplit('.', 1)[0]}.jpg", quality=90)
    print("wrote", name)
