/** Minimal multi-page A4 PDF (Helvetica). Latin text only; Devanagari is omitted in the file. */

function pdfEscape(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function toWinAnsi(s: string) {
  return [...s]
    .map((ch) => {
      const c = ch.charCodeAt(0);
      if (c === 9) return " ";
      if (c === 10 || c === 13) return "\n";
      if (c >= 32 && c <= 126) return ch;
      if (c === 0x2013 || c === 0x2014) return "-";
      if (c === 0x2018 || c === 0x2019) return "'";
      if (c === 0x201c || c === 0x201d) return '"';
      if (c === 0x2022) return "-";
      if (c === 0x00a0) return " ";
      return "";
    })
    .join("")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function wrapLine(line: string, max = 92): string[] {
  if (line.length <= max) return [line || " "];
  const words = line.split(" ");
  const out: string[] = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > max) {
      if (cur) out.push(cur);
      if (w.length > max) {
        for (let i = 0; i < w.length; i += max) out.push(w.slice(i, i + max));
        cur = "";
      } else {
        cur = w;
      }
    } else {
      cur = next;
    }
  }
  if (cur) out.push(cur);
  return out.length ? out : [" "];
}

function buildContentStream(lines: string[]): { streams: string[]; count: number } {
  const wrapped = lines.flatMap((l) => (l === "" ? [" "] : wrapLine(l)));
  const pageLines: string[][] = [];
  const perPage = 50;
  for (let i = 0; i < wrapped.length; i += perPage) {
    pageLines.push(wrapped.slice(i, i + perPage));
  }
  if (!pageLines.length) pageLines.push([" "]);

  const streams = pageLines.map((pl) => {
    const ops = ["BT", "/F1 11 Tf", "14 TL", "50 800 Td"];
    pl.forEach((line, i) => {
      if (i > 0) ops.push("T*");
      ops.push(`(${pdfEscape(line)}) Tj`);
    });
    ops.push("ET");
    return ops.join("\n");
  });
  return { streams, count: streams.length };
}

function xrefTable(offsets: number[]) {
  let out = `xref\n0 ${offsets.length}\n`;
  out += "0000000000 65535 f \n";
  for (let i = 1; i < offsets.length; i++) {
    out += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  return out;
}

export function buildSimplePdf(plainText: string): Blob {
  const lines = toWinAnsi(plainText).split("\n");
  const { streams, count } = buildContentStream(lines);

  const objs: string[] = [];
  const catalogId = 1;
  const pagesId = 2;
  const fontId = 3;
  const pageIds = Array.from({ length: count }, (_, i) => 4 + i);
  const contentIds = pageIds.map((id) => id + count);

  objs[catalogId] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
  objs[pagesId] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${count} >>`;
  objs[fontId] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`;

  pageIds.forEach((pageId, i) => {
    objs[pageId] =
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595 842] ` +
      `/Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentIds[i]} 0 R >>`;
  });
  contentIds.forEach((contentId, i) => {
    const stream = streams[i];
    objs[contentId] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  });

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let i = 1; i < objs.length; i++) {
    offsets[i] = pdf.length;
    pdf += `${i} 0 obj\n${objs[i]}\nendobj\n`;
  }
  const xrefPos = pdf.length;
  pdf += xrefTable(offsets);
  pdf += `trailer\n<< /Size ${offsets.length} /Root ${catalogId} 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

export function pdfFilename(title: string, id: string) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
  return `${slug || id}.pdf`;
}
