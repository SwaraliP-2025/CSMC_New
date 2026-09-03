import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle2, MapPin, Megaphone, Search, Wrench } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { CITY_ALERTS } from "@/data/cityAlerts";
import { ALERT_CATEGORY_LABELS, ALERT_STATUS_LABELS } from "@/data/civicLabels";
import { formatCivicDate } from "@/lib/unifiedSearch";
import type { AlertCategory, AlertStatus, CityAlert } from "@/types/civicCatalog";

const ALERT_CATS = Object.keys(ALERT_CATEGORY_LABELS) as AlertCategory[];

const CityAlerts = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [category, setCategory] = useState<AlertCategory | "all">("all");
  const [status, setStatus] = useState<AlertStatus | "all">("all");
  const [ward, setWard] = useState("all");
  const [dateOn, setDateOn] = useState("");
  const [query, setQuery] = useState("");
  const [showArchive, setShowArchive] = useState(false);

  const wards = useMemo(
    () =>
      [...new Map(CITY_ALERTS.map((a) => [a.ward, en ? a.ward : a.wardMr])).entries()].sort((a, b) =>
        a[0].localeCompare(b[0], undefined, { numeric: true })
      ),
    [en]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CITY_ALERTS.filter((a) => {
      if (category !== "all" && a.category !== category) return false;
      if (status !== "all" && a.status !== status) return false;
      if (ward !== "all" && a.ward !== ward) return false;
      if (dateOn && !(a.publishedAt <= dateOn && dateOn <= a.expectedCompletion)) return false;
      if (!showArchive && status === "all" && a.status === "completed" && !q && !dateOn) return false;
      if (!q) return true;
      return [
        a.titleEn,
        a.titleMr,
        a.descriptionEn,
        a.descriptionMr,
        a.locationEn,
        a.locationMr,
        a.departmentEn,
        a.departmentMr,
        a.ward,
        a.wardMr,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [category, status, ward, dateOn, query, showArchive]);

  const latest = CITY_ALERTS.filter((a) => a.status === "active")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 6);
  const upcoming = CITY_ALERTS.filter((a) => a.status === "upcoming").sort((a, b) =>
    a.expectedCompletion.localeCompare(b.expectedCompletion)
  );
  const completed = CITY_ALERTS.filter((a) => a.status === "completed").sort((a, b) =>
    b.expectedCompletion.localeCompare(a.expectedCompletion)
  );

  const list =
    status === "completed" || showArchive || query.trim() || dateOn
      ? filtered
      : filtered.filter((a) => a.status !== "completed");

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Public safety" : "सार्वजनिक सुरक्षा"}
        title={en ? "Live City Alerts & Public Advisory" : "थेट शहर इशारे व सार्वजनिक सल्ला"}
        subtitle={
          en
            ? "Actionable updates on roads, water, utilities, weather and public events."
            : "रस्ते, पाणी, उपयोगिता, हवामान व सार्वजनिक कार्यक्रमांबाबत कृतिशील अद्यतने."
        }
      />

      <section className="py-10 md:py-14 container">
        <div className="max-w-3xl mb-8">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-civic-red mb-2">
            {en ? "Live civic information" : "थेट नागरी माहिती"}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-civic-blue mb-3 leading-tight">
            {en ? "Live City Alerts & Public Advisory" : "थेट शहर इशारे व सार्वजनिक सल्ला"}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {en
              ? "Current disruptions and civic works, with location, department, status and related notices. Completed alerts are archived and remain searchable."
              : "सध्याचे व्यत्यय व नागरी कामे — स्थान, विभाग, स्थिती व संबंधित सूचनांसह. पूर्ण झालेले इशारे संग्रहित राहतात आणि शोधता येतात."}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-white flex-1 min-w-[200px] focus-within:ring-2 focus-within:ring-civic-blue/30">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={en ? "Search alerts, including archived…" : "इशारे शोधा, संग्रहित सहित…"}
              className="text-sm bg-transparent outline-none flex-1"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as AlertCategory | "all")}
            className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
          >
            <option value="all">{en ? "All categories" : "सर्व वर्ग"}</option>
            {ALERT_CATS.map((c) => (
              <option key={c} value={c}>
                {en ? ALERT_CATEGORY_LABELS[c].en : ALERT_CATEGORY_LABELS[c].mr}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as AlertStatus | "all")}
            className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
          >
            <option value="all">{en ? "All statuses" : "सर्व स्थिती"}</option>
            {(["active", "upcoming", "completed"] as AlertStatus[]).map((s) => (
              <option key={s} value={s}>
                {en ? ALERT_STATUS_LABELS[s].en : ALERT_STATUS_LABELS[s].mr}
              </option>
            ))}
          </select>
          <select
            value={ward}
            onChange={(e) => setWard(e.target.value)}
            className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
          >
            <option value="all">{en ? "All wards" : "सर्व प्रभाग"}</option>
            {wards.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={dateOn}
            onChange={(e) => setDateOn(e.target.value)}
            aria-label={en ? "Filter by date" : "दिनांकानुसार गाळणी"}
            className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
          />
        </div>

        <h2 className="font-serif text-xl font-bold text-civic-blue mb-4">
          {query.trim() || status !== "all"
            ? en
              ? "Matching alerts"
              : "जुळणारे इशारे"
            : en
              ? "Current alerts"
              : "सध्याचे इशारे"}
        </h2>
        {list.length === 0 ? (
          <div className="py-14 text-center border border-dashed border-border rounded-2xl bg-white mb-12">
            <p className="font-semibold text-civic-ink">{en ? "No alerts found" : "इशारे सापडले नाहीत"}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {en ? "Try another category, status or search term." : "दुसरा वर्ग, स्थिती किंवा शोध शब्द वापरा."}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {list.map((alert) => (
              <AlertCard key={alert.id} alert={alert} en={en} />
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Section
            icon={Megaphone}
            title={en ? "Latest Alerts" : "ताजे इशारे"}
            items={latest}
            en={en}
          />
          <Section
            icon={Wrench}
            title={en ? "Upcoming Civic Works" : "आगामी नागरी कामे"}
            items={upcoming}
            en={en}
          />
        </div>

        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="font-serif text-xl font-bold text-civic-blue flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-civic-red" />
            {en ? "Recently Completed Works" : "अलीकडे पूर्ण झालेली कामे"}
          </h2>
          <button
            type="button"
            onClick={() => setShowArchive((v) => !v)}
            className="text-xs font-bold text-civic-blue hover:underline"
          >
            {showArchive
              ? en
                ? "Hide archive from list above"
                : "वरील यादीतून संग्रह लपवा"
              : en
                ? "Include archive in list above"
                : "वरील यादीत संग्रह दाखवा"}
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {en
            ? "Completed alerts are archived automatically. Use search to find older civic works."
            : "पूर्ण झालेले इशारे आपोआप संग्रहित होतात. जुनी कामे शोधण्यासाठी सर्च वापरा."}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {completed.map((alert) => (
            <AlertCard key={alert.id} alert={alert} en={en} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

function Section({
  icon: Icon,
  title,
  items,
  en,
}: {
  icon: typeof Megaphone;
  title: string;
  items: CityAlert[];
  en: boolean;
}) {
  return (
    <div>
      <h2 className="font-serif text-xl font-bold text-civic-blue mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-civic-red" />
        {title}
      </h2>
      <div className="space-y-3">
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground">{en ? "None at this time." : "सध्या काही नाही."}</p>
        )}
        {items.map((a) => (
          <div key={a.id} className="bg-white border border-border rounded-xl px-4 py-3">
            <div className="flex items-center gap-2 mb-1">
              <StatusPill status={a.status} en={en} />
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">
                {en ? ALERT_CATEGORY_LABELS[a.category].en : ALERT_CATEGORY_LABELS[a.category].mr}
              </span>
            </div>
            <p className="text-sm font-semibold text-civic-ink">{en ? a.titleEn : a.titleMr}</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {en ? a.locationEn : a.locationMr}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertCard({ alert, en }: { alert: CityAlert; en: boolean }) {
  const notice = alert.relatedNoticeHref;
  return (
    <article className="bg-white border border-border rounded-2xl p-5 hover:shadow-elegant hover:border-civic-gold/30 transition-all flex flex-col">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <StatusPill status={alert.status} en={en} />
        <span className="text-[10px] font-bold uppercase tracking-wide text-civic-red">
          {en ? ALERT_CATEGORY_LABELS[alert.category].en : ALERT_CATEGORY_LABELS[alert.category].mr}
        </span>
      </div>
      <h3 className="font-serif text-base font-bold text-civic-blue leading-snug mb-2">
        {en ? alert.titleEn : alert.titleMr}
      </h3>
      <p className="text-xs text-muted-foreground mb-2 flex items-start gap-1">
        <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-civic-red" />
        {en ? alert.locationEn : alert.locationMr}
        {" · "}
        {en ? alert.ward : alert.wardMr}
      </p>
      <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-1">
        {en ? alert.descriptionEn : alert.descriptionMr}
      </p>
      <dl className="grid grid-cols-2 gap-2 text-xs mb-3">
        <div>
          <dt className="uppercase tracking-wide text-muted-foreground font-semibold">{en ? "Department" : "विभाग"}</dt>
          <dd className="font-semibold text-civic-ink">{en ? alert.departmentEn : alert.departmentMr}</dd>
        </div>
        <div>
          <dt className="uppercase tracking-wide text-muted-foreground font-semibold">
            {en ? "Expected completion" : "अपेक्षित पूर्णता"}
          </dt>
          <dd className="font-semibold text-civic-ink flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatCivicDate(alert.expectedCompletion, en)}
          </dd>
        </div>
      </dl>
      {notice && (
        <Link
          to={notice}
          className="text-xs font-bold text-civic-blue hover:underline self-start"
        >
          {en ? alert.relatedNoticeLabelEn ?? "Related notice" : alert.relatedNoticeLabelMr ?? "संबंधित सूचना"}
        </Link>
      )}
    </article>
  );
}

function StatusPill({ status, en }: { status: AlertStatus; en: boolean }) {
  const cls =
    status === "active"
      ? "bg-red-100 text-red-700"
      : status === "upcoming"
        ? "bg-amber-100 text-amber-800"
        : "bg-green-100 text-green-700";
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cls}`}>
      {en ? ALERT_STATUS_LABELS[status].en : ALERT_STATUS_LABELS[status].mr}
    </span>
  );
}

export default CityAlerts;
