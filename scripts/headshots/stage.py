"""Stage 1: crop each source to its 4:5 window and scale to 960x1200, padding
past the source edge by repeating the edge. Usage: stage.py <src dir> <out dir>"""
import sys
from PIL import Image, ImageOps
SRC, OUT = sys.argv[1:3]
OW, OH = 960, 1200
CROPS = {
    "LilyMcCarty_Headshot.png": (94, -4, 336, 420),
    "ColtonTrina_Headshot.png": (110, -23, 377, 471),
    "MariaPavlidis_Headshot.jpg": (0, 0, 1200, 1500),
}
for name, (x0, y0, w, h) in CROPS.items():
    im = Image.open(f"{SRC}/{name}").convert("RGB")
    pad = 60
    big = ImageOps.expand(im, border=pad)
    # repeat edges into the pad
    import numpy as np
    a = np.asarray(im)
    a = np.pad(a, ((pad, pad), (pad, pad), (0, 0)), mode="edge")
    big = Image.fromarray(a)
    crop = big.crop((x0 + pad, y0 + pad, x0 + pad + w, y0 + pad + h)).resize((OW, OH), Image.LANCZOS)
    crop.save(f"{OUT}/{name.rsplit('.', 1)[0]}.png")
    print("staged", name)
