import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
    import pytesseract
    from PIL import Image
except Exception as e:
    print("Missing dependency:", e)
    print("Install with: pip install pymupdf pytesseract pillow")
    sys.exit(1)

PDF_PATH = Path(r"C:/Users/gaura/Downloads/Banner_location.pdf")
OUT_TXT = Path(__file__).resolve().parent / "banner_ocr_pages.txt"

# Optionally set tesseract cmd path, uncomment and edit if needed:
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

LANG = "mar+eng"  # Marathi + English fallback. Ensure tessdata has 'mar'.

if not PDF_PATH.exists():
    print(f"PDF not found: {PDF_PATH}")
    sys.exit(1)

doc = fitz.open(str(PDF_PATH))
with OUT_TXT.open("w", encoding="utf-8") as out:
    for i, page in enumerate(doc, start=1):
        pix = page.get_pixmap(dpi=300)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        try:
            text = pytesseract.image_to_string(img, lang=LANG)
        except pytesseract.TesseractError as te:
            print("Tesseract error:", te)
            print("Retrying with English only...")
            text = pytesseract.image_to_string(img, lang="eng")
        out.write(f"--- PAGE {i} ---\n")
        out.write(text)
        out.write("\n\n")

print(f"OCR output written to {OUT_TXT}")
