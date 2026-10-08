import { useEffect, useRef, useState } from "react";
import { openPdf } from "@/lib/pdfDocument";
import type { PdfMatchRect } from "@/lib/pdfSearch";

type Props = {
  url: string;
  page: number;
  zoom: number;
  matches: PdfMatchRect[][];
  activeIndex: number;
  onPageCount: (count: number) => void;
  onError: () => void;
};

/**
 * Renders one page of the open preview and paints a highlight on every match.
 * Coordinates are fractions of the page, so they stay aligned when the page is zoomed.
 */
export function PdfHighlightedPage({ url, page, zoom, matches, activeIndex, onPageCount, onError }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const onPageCountRef = useRef(onPageCount);
  const onErrorRef = useRef(onError);
  onPageCountRef.current = onPageCount;
  onErrorRef.current = onError;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const renderTask = { cancel: () => undefined as void };
    setReady(false);
    (async () => {
      try {
        const pdf = await openPdf(url);
        if (cancelled) return;
        onPageCountRef.current(pdf.numPages);
        const pdfPage = await pdf.getPage(page);
        if (cancelled) return;
        const viewport = pdfPage.getViewport({ scale: zoom });
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const task = pdfPage.render({ canvasContext: context, viewport });
        renderTask.cancel = () => task.cancel();
        await task.promise;
        if (!cancelled) setReady(true);
      } catch (error) {
        const name = error instanceof Error ? error.name : "";
        if (!cancelled && name !== "RenderingCancelledException") onErrorRef.current();
      }
    })();
    return () => {
      cancelled = true;
      renderTask.cancel();
    };
  }, [url, page, zoom]);

  useEffect(() => {
    if (!ready) return;
    activeRef.current?.scrollIntoView({ block: "center", inline: "nearest" });
  }, [ready, page, activeIndex, zoom]);

  return (
    <div className="relative mx-auto w-max max-w-none">
      <canvas ref={canvasRef} className="block bg-white shadow-sm" />
      {ready
        ? matches.map((rects, occurrence) =>
            rects.map((rect, index) => {
              const active = occurrence === activeIndex;
              return (
                <div
                  key={`${occurrence}-${index}`}
                  ref={active && index === 0 ? activeRef : undefined}
                  data-pdf-match={occurrence}
                  data-pdf-active={active ? "true" : "false"}
                  className="absolute pointer-events-none rounded-sm"
                  style={{
                    left: `${rect.x * 100}%`,
                    top: `${rect.y * 100}%`,
                    width: `${rect.w * 100}%`,
                    height: `${rect.h * 100}%`,
                    background: active ? "rgba(234, 88, 12, 0.45)" : "rgba(250, 204, 21, 0.55)",
                    outline: active ? "2px solid #c2410c" : "1px solid rgba(161, 98, 7, 0.45)",
                    mixBlendMode: "multiply",
                  }}
                />
              );
            }),
          )
        : null}
    </div>
  );
}
