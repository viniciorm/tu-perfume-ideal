import pypdfium2 as pdfium
import os

def render_pdf_to_images(pdf_path, output_dir):
    print(f"Rendering {pdf_path} to {output_dir}...")
    if not os.path.exists(pdf_path):
        print(f"Error: {pdf_path} does not exist.")
        return
        
    os.makedirs(output_dir, exist_ok=True)
    pdf = pdfium.PdfDocument(pdf_path)
    num_pages = len(pdf)
    print(f"Total pages in PDF: {num_pages}")
    
    for i in range(num_pages):
        page = pdf[i]
        # Render page at 150 DPI (150 / 72 = 2.083 scale factor)
        bitmap = page.render(scale=1.5)
        pil_img = bitmap.to_pil()
        out_path = os.path.join(output_dir, f"page_{i+1}.png")
        pil_img.save(out_path)
        print(f"Saved {out_path}")
        
    print(f"Done rendering {pdf_path}!")

if __name__ == "__main__":
    docs_dir = r"c:\Users\marco\Documents\parfums\docs"
    scratch_dir = r"c:\Users\marco\Documents\parfums\scratch"
    
    # Render Notas_Fragancias_Red&Black.pdf
    pdf_path = os.path.join(docs_dir, "Notas_Fragancias_Red&Black.pdf")
    output_dir = os.path.join(scratch_dir, "notas_pages")
    render_pdf_to_images(pdf_path, output_dir)
