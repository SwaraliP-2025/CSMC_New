from pathlib import Path
from pypdf import PdfReader

pdf_path = Path(r"C:/Users/gaura/Downloads/Banner_location.pdf")
# write output next to this script so running from any cwd works
out_path = Path(__file__).resolve().parent / "banner_text_pages.txt"

reader = PdfReader(str(pdf_path))
with out_path.open("w", encoding="utf-8") as f:
    for i, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        f.write(f"--- PAGE {i} ---\n")
        f.write(text)
        f.write("\n\n")

print(f"Wrote extracted text to {out_path}")
