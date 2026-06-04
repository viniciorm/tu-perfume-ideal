import os
from PIL import Image

def crop_assets():
    # Define directories
    output_dir = r"c:\Users\marco\Documents\parfums\public\images\lavit"
    os.makedirs(output_dir, exist_ok=True)

    # Image paths
    flyer_path = r"C:\Users\marco\.gemini\antigravity\brain\5745326c-96a6-414f-9063-502417a52431\media__1779454596942.png"
    top_row_path = r"C:\Users\marco\.gemini\antigravity\brain\5745326c-96a6-414f-9063-502417a52431\media__1779454700291.png"
    bottom_row_path = r"C:\Users\marco\.gemini\antigravity\brain\5745326c-96a6-414f-9063-502417a52431\media__1779454712028.png"

    # Open images
    img_flyer = Image.open(flyer_path)
    img_top = Image.open(top_row_path)
    img_bottom = Image.open(bottom_row_path)

    # 1. Crop Pack from flyer
    # flyer size is (585, 751). The Pack is on the right, top/mid area.
    # Let's crop X from 280 to 570, Y from 40 to 330.
    pack_box = (280, 40, 570, 330)
    pack_img = img_flyer.crop(pack_box)
    pack_img.save(os.path.join(output_dir, "lavit-pack.png"))
    print("Cropped Lavit Pack")

    # 2. Crop top row products (1024, 447)
    # Column width is roughly 341. Let's do overlaps/margins
    # Fruits of Summer: X from 0 to 345, Y from 0 to 447
    fos_img = img_top.crop((0, 0, 345, 447))
    fos_img.save(os.path.join(output_dir, "fruits-of-summer.png"))

    # Tropical Caribbean: X from 325 to 665, Y from 0 to 447
    tc_img = img_top.crop((325, 0, 665, 447))
    tc_img.save(os.path.join(output_dir, "tropical-caribbean.png"))

    # Forever Young: X from 645 to 1024, Y from 0 to 447
    fy_img = img_top.crop((645, 0, 1024, 447))
    fy_img.save(os.path.join(output_dir, "forever-young.png"))
    print("Cropped top row fragrances")

    # 3. Crop bottom row products (1024, 431)
    # Fresh Garden: X from 0 to 345, Y from 0 to 431
    fg_img = img_bottom.crop((0, 0, 345, 431))
    fg_img.save(os.path.join(output_dir, "fresh-garden.png"))

    # Fantasy of Love: X from 320 to 660, Y from 0 to 431
    fol_img = img_bottom.crop((320, 0, 660, 431))
    fol_img.save(os.path.join(output_dir, "fantasy-of-love.png"))

    # Sweet Romance: X from 640 to 1024, Y from 0 to 431
    sr_img = img_bottom.crop((640, 0, 1024, 431))
    sr_img.save(os.path.join(output_dir, "sweet-romance.png"))
    print("Cropped bottom row fragrances")

if __name__ == "__main__":
    crop_assets()
