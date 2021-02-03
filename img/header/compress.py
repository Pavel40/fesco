#!/usr/bin/python3
import os
import PIL
from PIL import Image

for file in os.listdir():
  if file.endswith('jpg'):
    img = Image.open(file)
    img.thumbnail((3840, 2160))
    img.save(file, format="jpeg", optimize=True, quality=30)
