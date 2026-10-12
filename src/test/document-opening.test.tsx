import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PdfFileActions } from "@/components/site/PdfFileActions";
import { DocumentArchiveBrowser } from "@/components/site/DocumentArchiveBrowser";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { driveFileViewUrl, publishedDocumentUrl, publicDocumentUrl } from "@/lib/archiveDocuments";
import { openInPagePdf } from "@/lib/pdfPreview";

const DRIVE_HREF = publishedDocumentUrl([
  "Municipal Document Repository",
  "Audit",
  "Annual_Audit_Report_of_2004-2005.pdf",
]);
const GITHUB_HREF = publicDocumentUrl(["FAQ_SevenStar.pdf"]);

function renderActions(href: string, filename: string) {
  return render(
    <LanguageProvider>
      <PdfFileActions href={href} filename={filename} title="Annual audit report" />
    </LanguageProvider>,
  );
}

describe("document opening by host", () => {
  it("opens a verified Drive PDF in a new tab without an on-site preview", () => {
    const { container } = renderActions(DRIVE_HREF, "Annual_Audit_Report_of_2004-2005.pdf");
    const link = screen.getByRole("link", { name: /Google Drive/i });
    expect(link).toHaveAttribute("href", DRIVE_HREF);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(container.querySelector("iframe")).toBeNull();
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("uses the Drive file page when the source URL is a preview or download link", () => {
    const preview = DRIVE_HREF.replace(/\/view$/, "/preview");
    renderActions(preview, "Annual_Audit_Report_of_2004-2005.pdf");
    expect(screen.getByRole("link", { name: /Google Drive/i })).toHaveAttribute("href", driveFileViewUrl("19BfwyiKSb4xFuFsMQg_D-FVrcxJtDxHd"));
  });

  it("keeps on-site preview and download for a GitHub-hosted PDF", () => {
    renderActions(GITHUB_HREF, "FAQ_SevenStar.pdf");
    const view = screen.getByRole("link", { name: /PDF पहा|View PDF/ });
    const download = screen.getByRole("link", { name: /डाउनलोड|Download/ });
    expect(view).toHaveAttribute("href", GITHUB_HREF);
    expect(view).not.toHaveAttribute("target");
    expect(download).toHaveAttribute("href", GITHUB_HREF);
    expect(download).toHaveAttribute("download", "FAQ_SevenStar.pdf");
  });

  it("does not open a verified Drive PDF in the on-site preview", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    const listener = vi.fn();
    window.addEventListener("csmc-open-pdf", listener);
    openInPagePdf({ url: DRIVE_HREF, filename: "Annual_Audit_Report_of_2004-2005.pdf", title: "Audit" });
    expect(open).toHaveBeenCalledWith(DRIVE_HREF, "_blank", "noopener,noreferrer");
    expect(listener).not.toHaveBeenCalled();
    openInPagePdf({ url: GITHUB_HREF, filename: "FAQ_SevenStar.pdf", title: "FAQ" });
    expect(listener).toHaveBeenCalledOnce();
    window.removeEventListener("csmc-open-pdf", listener);
    open.mockRestore();
  });

  it("renders the shared card and keeps each host's action", () => {
    const { container } = render(
      <LanguageProvider>
        <DocumentArchiveBrowser
          documents={[
            { id: "drive", file: "Annual_Audit_Report_of_2004-2005.pdf", bytes: 10 },
            { id: "site", file: "FAQ_SevenStar.pdf", bytes: 10 },
            {
              id: "web",
              file: "notice.pdf",
              bytes: 0,
              externalUrl: "https://chhsambhajinagarmc.org/notice.pdf",
              titleEn: "Official notice",
              titleMr: "अधिकृत सूचना",
            },
          ]}
          folderSegments={["Municipal Document Repository", "Audit"]}
        />
      </LanguageProvider>,
    );
    expect(container.querySelectorAll("article")).toHaveLength(3);
    expect(screen.getByRole("link", { name: /Google Drive/i })).toHaveAttribute("target", "_blank");
    const view = screen.getByRole("link", { name: /PDF पहा: FAQ SevenStar|View PDF: FAQ SevenStar/ });
    expect(view).not.toHaveAttribute("target");
    expect(screen.getByRole("link", { name: /डाउनलोड: FAQ SevenStar|Download: FAQ SevenStar/ })).toHaveAttribute("download", "FAQ_SevenStar.pdf");
    expect(screen.getByRole("link", { name: "उघडा" })).toHaveAttribute("href", "https://chhsambhajinagarmc.org/notice.pdf");
    expect(screen.queryByText(/AI Summary|एआय सारांश/)).toBeNull();
  });
});
