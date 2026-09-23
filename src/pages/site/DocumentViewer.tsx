import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Building2,
  Download,
  Eye,
  FileText,
  Languages,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { localizeDigits } from "@/i18n/digits";
import { useLang } from "@/i18n/LanguageContext";
import { CIVIC_CATALOG, getCivicRecord } from "@/data/civicCatalog";
import {
  CATEGORY_LABELS,
  DOCUMENT_STATUS_LABELS,
  LANGUAGE_LABELS,
  officialDocumentId,
} from "@/data/civicLabels";
import {
  documentPermalink,
  downloadCivicRecord,
  formatCivicDate,
  openCivicRecordPdf,
  recordHref,
} from "@/lib/unifiedSearch";
import { shareLink } from "@/lib/bookmarks";
import type { CivicRecord } from "@/types/civicCatalog";

const DocumentViewer = () => {
  const { id = "" } = useParams();
  const { lang } = useLang();
  const enSite = lang === "en";
  const navigate = useNavigate();
  const record = getCivicRecord(id);
  const [viewEn, setViewEn] = useState(enSite);
  const [simple, setSimple] = useState(false);

  useEffect(() => {
    setViewEn(enSite);
    setSimple(false);
  }, [enSite, id]);

  const related = useMemo(
    () =>
      (record?.relatedIds ?? [])
        .map((rid) => CIVIC_CATALOG.find((r) => r.id === rid))
        .filter((r): r is CivicRecord => !!r),
    [record]
  );

  const relatedServices = related.filter((r) => r.category === "service");
  const relatedCirculars = related.filter((r) => r.category === "circular");
  const relatedDepartments = related.filter((r) => r.category === "department" || r.category === "contact");
  const relatedDocuments = related.filter(
    (r) => r.category !== "service" && r.category !== "circular" && r.category !== "department" && r.category !== "contact"
  );

  if (!record) {
    return (
      <Layout>
        <PageHeader
          title={enSite ? "Document not found" : "दस्तऐवज सापडला नाही"}
          eyebrow={enSite ? "Municipal Knowledge Repository" : "महापालिका ज्ञान भांडार"}
        />
        <section className="py-16 container text-center">
          <p className="text-muted-foreground mb-4">
            {enSite ? "This document is not in the repository." : "हा दस्तऐवज भांडारात नाही."}
          </p>
          <Link to="/digital-repository" className="text-sm font-bold text-civic-blue hover:underline">
            {enSite ? "Back to repository" : "भांडाराकडे परत"}
          </Link>
        </section>
      </Layout>
    );
  }

  const en = viewEn;
  /** AI copy always follows the site language the citizen selected. */
  const aiEn = enSite;
  const digits = (value: string | number | null | undefined) => localizeDigits(value, en ? "en" : "mr");
  const docId = officialDocumentId(record.id, record.year);

  return (
    <Layout>
      <PageHeader
        eyebrow={enSite ? "Municipal Knowledge Repository" : "महापालिका ज्ञान भांडार"}
        title={enSite ? record.titleEn : record.titleMr}
      />
      <section className="py-10 md:py-12 container">
        <button
          type="button"
          onClick={() => navigate("/digital-repository")}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-civic-blue mb-6 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {enSite ? "All documents" : "सर्व दस्तऐवज"}
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-border rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-civic-blue px-2 py-0.5 rounded">
                  {enSite ? "Official" : "अधिकृत"}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-civic-red">
                  {en ? CATEGORY_LABELS[record.category].en : CATEGORY_LABELS[record.category].mr}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    record.status === "current"
                      ? "bg-green-100 text-green-700"
                      : record.status === "archived"
                        ? "bg-muted text-muted-foreground"
                        : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {en ? DOCUMENT_STATUS_LABELS[record.status].en : DOCUMENT_STATUS_LABELS[record.status].mr}
                </span>
              </div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue leading-tight mb-4">
                {en ? record.titleEn : record.titleMr}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {record.downloadable && (
                  <>
                    <button
                      type="button"
                      onClick={() => openCivicRecordPdf(record)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue/90 transition-all"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {en ? "Open document" : "दस्तऐवज उघडा"}
                    </button>
                    <button
                      type="button"
                      onClick={() => downloadCivicRecord(record)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground border border-border rounded-lg px-3 py-1.5 hover:border-civic-blue hover:text-civic-blue transition-all"
                    >
                      <Download className="h-3.5 w-3.5" />
                      {en ? "Download PDF" : "PDF डाउनलोड"}
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => shareLink(en ? record.titleEn : record.titleMr, documentPermalink(record.id))}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue hover:text-white transition-all"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  {en ? "Share" : "शेअर"}
                </button>
                <button
                  type="button"
                  onClick={() => setViewEn((v) => !v)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue hover:text-white transition-all"
                >
                  <Languages className="h-3.5 w-3.5" />
                  {viewEn ? "मराठीत वाचा" : "Read in English"}
                </button>
              </div>

              <div className="rounded-xl border border-civic-gold/40 bg-civic-gold/10 p-5 mb-5">
                <p className="text-[10px] font-bold uppercase tracking-wide text-civic-blue mb-2 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  {aiEn ? "AI summary" : "एआय सारांश"}
                  <button
                    type="button"
                    onClick={() => setSimple((v) => !v)}
                    className="ml-auto font-medium text-muted-foreground normal-case tracking-normal hover:text-civic-blue"
                  >
                    {simple ? (aiEn ? "Detailed" : "सविस्तर") : aiEn ? "Simpler" : "सोपे"}
                  </button>
                </p>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {simple
                    ? aiEn
                      ? record.simpleEn
                      : record.simpleMr
                    : aiEn
                      ? record.summaryEn
                      : record.summaryMr}
                </p>
                {!simple && (aiEn ? record.highlightsEn : record.highlightsMr).length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {(aiEn ? record.highlightsEn : record.highlightsMr).slice(0, 3).map((h) => (
                      <li key={h} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-civic-gold font-bold">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <article className="bg-civic-light border border-border rounded-xl p-6 md:p-8 mb-5">
                <div className="flex items-center gap-2 text-civic-blue mb-4 pb-3 border-b border-civic-gold/40">
                  <BookOpen className="h-4 w-4" />
                  <p className="text-xs font-bold uppercase tracking-wide">
                    {en ? "Document text" : "दस्तऐवज मजकूर"}
                  </p>
                </div>
                <p className="text-center text-[11px] font-semibold text-muted-foreground mb-6">
                  {en
                    ? "Chhatrapati Sambhajinagar Municipal Corporation"
                    : "छत्रपती संभाजीनगर महानगरपालिका"}
                </p>
                {(en ? record.bodyEn : record.bodyMr).map((para) => (
                  <p key={para.slice(0, 40)} className="text-sm text-foreground/85 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </article>

              <details className="rounded-xl border border-border bg-muted/20 px-4 py-3 mb-5 group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-2 text-sm font-bold text-civic-blue">
                  <span>{en ? "Document details (metadata)" : "दस्तऐवज तपशील (मेटाडेटा)"}</span>
                  <span className="text-xs font-semibold text-muted-foreground group-open:hidden">
                    {en ? "Show" : "दाखवा"}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground hidden group-open:inline">
                    {en ? "Hide" : "लपवा"}
                  </span>
                </summary>
                <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs mt-3 pt-3 border-t border-border">
                  <MetaRow label={en ? "Department" : "विभाग"} value={en ? record.departmentEn : record.departmentMr} />
                  <MetaRow
                    label={en ? "Category" : "वर्ग"}
                    value={en ? CATEGORY_LABELS[record.category].en : CATEGORY_LABELS[record.category].mr}
                  />
                  <MetaRow label={en ? "Published date" : "प्रकाशन दिनांक"} value={formatCivicDate(record.publishedAt, en)} />
                  <MetaRow label={en ? "Last updated" : "शेवटचे अद्यतन"} value={formatCivicDate(record.updatedAt, en)} />
                  <MetaRow
                    label={en ? "Language" : "भाषा"}
                    value={en ? LANGUAGE_LABELS[record.language].en : LANGUAGE_LABELS[record.language].mr}
                  />
                  <MetaRow
                    label={en ? "Status" : "स्थिती"}
                    value={en ? DOCUMENT_STATUS_LABELS[record.status].en : DOCUMENT_STATUS_LABELS[record.status].mr}
                  />
                  <MetaRow label={en ? "Document ID" : "दस्तऐवज आयडी"} value={digits(docId)} />
                  {record.fileSize && (
                    <MetaRow label={en ? "File size" : "फाइल आकार"} value={digits(record.fileSize)} />
                  )}
                  <MetaRow
                    label={en ? "Reading time" : "वाचन वेळ"}
                    value={en ? `${digits(record.readingMinutes)} min` : `${digits(record.readingMinutes)} मिनिटे`}
                  />
                </dl>
                <div className="mt-3 rounded-lg border border-border bg-white/70 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-civic-blue mb-1 flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {en ? "Applicable citizens" : "लागू नागरिक"}
                  </p>
                  <p className="text-sm text-foreground/80">{en ? record.applicableEn : record.applicableMr}</p>
                </div>
              </details>

              {record.aiFaqs.length > 0 && (
                <div className="rounded-xl border border-border p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-civic-blue mb-3 flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    {aiEn ? "AI generated FAQs" : "एआय सामान्य प्रश्न"}
                  </p>
                  <dl className="space-y-3">
                    {record.aiFaqs.map((faq) => (
                      <div key={faq.qEn}>
                        <dt className="text-sm font-semibold text-civic-ink">{aiEn ? faq.qEn : faq.qMr}</dt>
                        <dd className="text-sm text-muted-foreground mt-0.5">{aiEn ? faq.aEn : faq.aMr}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <RelatedBlock title={en ? "Related municipal services" : "संबंधित नागरी सेवा"} items={relatedServices} en={en} />
            <RelatedBlock title={en ? "Related circulars" : "संबंधित परिपत्रके"} items={relatedCirculars} en={en} />
            <RelatedBlock title={en ? "Related documents" : "संबंधित दस्तऐवज"} items={relatedDocuments} en={en} />
            <RelatedBlock
              title={en ? "Related departments" : "संबंधित विभाग"}
              items={relatedDepartments}
              en={en}
              icon
            />
          </aside>
        </div>
      </section>
    </Layout>
  );
};

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/60 py-1">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-semibold text-civic-ink text-right">{value}</dd>
    </div>
  );
}

function RelatedBlock({
  title,
  items,
  en,
  icon,
}: {
  title: string;
  items: CivicRecord[];
  en: boolean;
  icon?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <h2 className="font-serif text-lg font-bold text-civic-blue mb-3">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => {
          const dest = recordHref(item);
          const Icon = icon ? Building2 : FileText;
          const label = (
            <span>
              <span className="text-sm font-semibold text-civic-blue group-hover:underline leading-snug block">
                {en ? item.titleEn : item.titleMr}
              </span>
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                {en ? CATEGORY_LABELS[item.category].en : CATEGORY_LABELS[item.category].mr}
              </span>
            </span>
          );
          return (
            <li key={item.id}>
              {dest.external ? (
                <a href={dest.to} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 group">
                  <Icon className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  {label}
                </a>
              ) : (
                <Link to={dest.to} className="flex items-start gap-2 group">
                  <Icon className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DocumentViewer;
