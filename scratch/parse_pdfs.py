import pdfplumber
import os

def extract_pdf_text(pdf_path, txt_path):
    print(f"Extracting {pdf_path} to {txt_path}...")
    if not os.path.exists(pdf_path):
        print(f"Error: {pdf_path} does not exist.")
        return
        
    with pdfplumber.open(pdf_path) as pdf:
        num_pages = len(pdf.pages)
        print(f"Total pages: {num_pages}")
        
        with open(txt_path, "w", encoding="utf-8") as f:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                f.write(f"--- PAGE {i+1} ---\n")
                if text:
                    f.write(text)
                    f.write("\n")
                else:
                    f.write("[No text extracted]\n")
    print(f"Done extracting {pdf_path}!")

if __name__ == "__main__":
    docs_dir = r"c:\Users\marco\Documents\parfums\docs"
    
    # Extract Catalogo.Parfums.pdf
    pdf1 = os.path.join(docs_dir, "Catalogo.Parfums.pdf")
    txt1 = os.path.join(docs_dir, "Catalogo.Parfums.txt")
    extract_pdf_text(pdf1, txt1)
    
    # Extract Notas_Fragancias_Red&Black.pdf
    pdf2 = os.path.join(docs_dir, "Notas_Fragancias_Red&Black.pdf")
    txt2 = os.path.join(docs_dir, "Notas_Fragancias_Red&Black.txt")
    extract_pdf_text(pdf2, txt2)
