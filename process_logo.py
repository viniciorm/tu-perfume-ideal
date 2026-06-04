
from PIL import Image
import math

def process_image(input_path, output_path):
    try:
        img = Image.open(input_path).convert('RGBA')
        data = img.getdata()
        
        new_data = []
        # The fake transparency grid is usually white (255,255,255) and gray (204,204,204 or similar)
        # We will replace anything close to grayscale with a dark red (122, 16, 37) or transparent.
        # But wait, gold is also somewhat yellowish. Gold is high red, high green, low blue.
        # Grayscale is R~=G~=B.
        
        for item in data:
            # Check if pixel is grayscale-ish (r, g, b are very close to each other)
            # and it's light enough to be the grid.
            r, g, b, a = item
            
            # calculate color distance from pure gray
            avg = (r + g + b) / 3
            variance = abs(r - avg) + abs(g - avg) + abs(b - avg)
            
            # if it's very close to gray and light, it's the grid
            if variance < 20 and avg > 150:
                # Replace with the red color of the background (e.g. 74, 21, 28)
                new_data.append((74, 21, 28, 255))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, 'PNG')
        print('Image processed successfully')
    except Exception as e:
        print('Error:', e)

process_image(r'c:\Users\marco\Documents\parfums\public\images\logo_redparfums.png', r'c:\Users\marco\Documents\parfums\public\images\logo_redparfums.png')
