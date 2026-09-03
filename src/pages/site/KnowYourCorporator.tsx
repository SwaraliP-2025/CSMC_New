import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getCorporatorsByLocality,
  getCorporatorsByPrabhag,
  listPrabhagNumbers,
  suggestLocalities,
} from "@/lib/corporatorSearch";
import { formatNum, seatLabel, toDevanagariDigits } from "@/lib/prabhagFormat";
import type {
  CorporatorSearchMethod,
  CorporatorSearchResult,
  LocalitySuggestion,
  Prabhag,
} from "@/types/corporator";
import {
  Loader2,
  MapPin,
  Phone,
  Search,
  UserRound,
  Users,
} from "lucide-react";

/** Other localities in the same prabhag (exclude the searched locality when shown in the header). */
function nearbyLocalitiesInPrabhag(localities: string[], matchedLocality?: string): string[] {
  if (!matchedLocality?.trim()) return localities;
  const norm = (s: string) => s.trim().toLowerCase();
  const needle = norm(matchedLocality);
  return localities.filter((loc) => norm(loc) !== needle);
}

const KnowYourCorporator = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const listboxId = useId();

  const [searchMethod, setSearchMethod] = useState<CorporatorSearchMethod>("prabhag");
  const [prabhagList, setPrabhagList] = useState<Prabhag[]>([]);
  const [selectedPrabhagNo, setSelectedPrabhagNo] = useState("");

  const [localityQuery, setLocalityQuery] = useState("");
  const [suggestions, setSuggestions] = useState<LocalitySuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CorporatorSearchResult | null>(null);
  /** Which method produced the current result — drives card layout. */
  const [resultMethod, setResultMethod] = useState<CorporatorSearchMethod | null>(null);
  const [notFound, setNotFound] = useState(false);

  const suggestTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listPrabhagNumbers().then(setPrabhagList).catch(console.error);
  }, []);

  useEffect(() => {
    if (searchMethod !== "locality") {
      setSuggestions([]);
      return;
    }
    if (suggestTimer.current) clearTimeout(suggestTimer.current);
    suggestTimer.current = setTimeout(async () => {
      const items = await suggestLocalities(localityQuery);
      setSuggestions(items);
      setShowSuggestions(items.length > 0 && document.activeElement === inputRef.current);
      setActiveSuggestion(-1);
    }, 180);
    return () => {
      if (suggestTimer.current) clearTimeout(suggestTimer.current);
    };
  }, [localityQuery, searchMethod]);

  const runSearch = useCallback(
    async (method: CorporatorSearchMethod, value: string) => {
      setLoading(true);
      setNotFound(false);
      setResult(null);
      setResultMethod(null);
      try {
        const data =
          method === "prabhag"
            ? await getCorporatorsByPrabhag(value)
            : await getCorporatorsByLocality(value);
        if (data) {
          setResult(data);
          setResultMethod(method);
        } else {
          setNotFound(true);
        }
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handlePrabhagSearch = () => {
    if (!selectedPrabhagNo) return;
    void runSearch("prabhag", selectedPrabhagNo);
  };

  const handleLocalitySearch = (value?: string) => {
    const q = (value ?? localityQuery).trim();
    if (!q) return;
    setLocalityQuery(q);
    setShowSuggestions(false);
    void runSearch("locality", q);
  };

  const pickSuggestion = (item: LocalitySuggestion) => {
    setLocalityQuery(item.name);
    setShowSuggestions(false);
    void runSearch("locality", item.name);
  };

  const onLocalityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || !suggestions.length) {
      if (e.key === "Enter") handleLocalitySearch();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestion((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeSuggestion >= 0) {
        pickSuggestion(suggestions[activeSuggestion]);
      } else {
        handleLocalitySearch();
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Citizen Services" : "नागरिक सेवा"}
        title={en ? "Know Your Corporator" : "तुमचा नगरसेवक जाणून घ्या"}
        subtitle={
          en
            ? "Find your elected corporators by searching using your Prabhag Number or Locality."
            : "प्रभाग क्रमांक किंवा परिसर नावाने शोधून आपले निवडून आलेले नगरसेवक शोधा."
        }
      />

      <section className="py-10 container max-w-3xl">
        <Tabs
          value={searchMethod}
          onValueChange={(v) => {
            setSearchMethod(v as CorporatorSearchMethod);
            setResult(null);
            setResultMethod(null);
            setNotFound(false);
          }}
        >
          <TabsList className="grid w-full grid-cols-2 h-auto p-1 mb-6">
            <TabsTrigger value="prabhag" className="text-xs sm:text-sm py-2">
              {en ? "Search by Prabhag Number" : "प्रभाग क्रमांकाने शोधा"}
            </TabsTrigger>
            <TabsTrigger value="locality" className="text-xs sm:text-sm py-2">
              {en ? "Search by Locality" : "परिसराने शोधा"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="prabhag">
            <div className="rounded-2xl border border-border bg-white p-5 md:p-6 shadow-card-soft space-y-4">
              <label htmlFor="prabhag-select" className="block text-sm font-semibold text-civic-blue">
                {en ? "Select Prabhag" : "प्रभाग निवडा"}
              </label>
              <Select value={selectedPrabhagNo} onValueChange={setSelectedPrabhagNo}>
                <SelectTrigger id="prabhag-select" className="w-full">
                  <SelectValue placeholder={en ? "Select Prabhag" : "प्रभाग निवडा"} />
                </SelectTrigger>
                <SelectContent position="popper" className="max-h-64">
                  {prabhagList.map((p) => (
                    <SelectItem key={p.no} value={p.no}>
                      {en ? `Prabhag ${p.no}` : `प्रभाग ${toDevanagariDigits(p.no)}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                type="button"
                onClick={handlePrabhagSearch}
                disabled={!selectedPrabhagNo || loading}
                className="w-full sm:w-auto bg-civic-blue hover:bg-civic-blue/90"
              >
                {loading && searchMethod === "prabhag" ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Search className="h-4 w-4 mr-2" />
                )}
                {en ? "Search" : "शोधा"}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="locality">
            <div className="rounded-2xl border border-border bg-white p-5 md:p-6 shadow-card-soft space-y-4">
              <label htmlFor="locality-search" className="block text-sm font-semibold text-civic-blue">
                {en ? "Enter your locality" : "आपला परिसर प्रविष्ट करा"}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  ref={inputRef}
                  id="locality-search"
                  type="text"
                  role="combobox"
                  aria-expanded={showSuggestions}
                  aria-controls={listboxId}
                  aria-autocomplete="list"
                  value={localityQuery}
                  onChange={(e) => setLocalityQuery(e.target.value)}
                  onFocus={() => suggestions.length && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  onKeyDown={onLocalityKeyDown}
                  placeholder={en ? "Enter your locality" : "आपला परिसर प्रविष्ट करा"}
                  className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30"
                  autoComplete="off"
                />
                {showSuggestions && suggestions.length > 0 && (
                  <ul
                    id={listboxId}
                    role="listbox"
                    className="absolute z-20 mt-1 w-full max-h-56 overflow-y-auto rounded-lg border border-border bg-white shadow-lg py-1"
                  >
                    {suggestions.map((item, idx) => (
                      <li key={`${item.name}-${item.prabhagNumber}`} role="option" aria-selected={idx === activeSuggestion}>
                        <button
                          type="button"
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-civic-blue/5 ${
                            idx === activeSuggestion ? "bg-civic-blue/10 text-civic-blue" : ""
                          }`}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => pickSuggestion(item)}
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-muted-foreground text-xs ml-2">
                            {en ? `Prabhag ${item.prabhagNumber}` : `प्रभाग ${toDevanagariDigits(item.prabhagNumber)}`}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {en ? "Example: " : "उदा.: "}
                <button
                  type="button"
                  className="text-civic-blue font-medium hover:underline"
                  onClick={() => {
                    setLocalityQuery(en ? "Bharatnagar" : "भारत नगर");
                    void runSearch("locality", "Bharatnagar");
                  }}
                >
                  {en ? "Bharatnagar" : "भारत नगर"}
                </button>
              </p>
              <Button
                type="button"
                onClick={() => handleLocalitySearch()}
                disabled={!localityQuery.trim() || loading}
                className="w-full sm:w-auto bg-civic-blue hover:bg-civic-blue/90"
              >
                {loading && searchMethod === "locality" ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Search className="h-4 w-4 mr-2" />
                )}
                {en ? "Search" : "शोधा"}
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {loading && (
          <div className="flex items-center justify-center gap-2 py-12 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin text-civic-blue" />
            <span className="text-sm">{en ? "Searching…" : "शोध चालू आहे…"}</span>
          </div>
        )}

        {!loading && notFound && (
          <div
            className="mt-8 rounded-xl border border-dashed border-border bg-muted/30 px-6 py-10 text-center text-sm text-muted-foreground"
            role="status"
          >
            {en ? "No records found. Try another prabhag or locality name." : "नोंद सापडली नाही. दुसरा प्रभाग किंवा परिसर नाव वापरून पहा."}
          </div>
        )}

        {!loading && result && (
          <div className="mt-8 rounded-2xl border-2 border-civic-blue/20 bg-white p-5 md:p-6 shadow-card-soft">
            <div className="mb-5 min-w-0">
              {resultMethod === "locality" && result.matchedLocality ? (
                <>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    {en ? "Locality" : "परिसर"}
                  </p>
                  <h2 className="font-serif text-xl font-bold text-civic-blue break-words">
                    {result.matchedLocality}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {en
                      ? "This locality falls under the following administrative area:"
                      : "हा परिसर खालील प्रशासकीय क्षेत्रात येतो:"}
                  </p>
                </>
              ) : (
                <h2 className="font-serif text-xl font-bold text-civic-blue">
                  {en
                    ? `Prabhag ${result.prabhagNumber}`
                    : `प्रभाग ${toDevanagariDigits(result.prabhagNumber)}`}
                </h2>
              )}
            </div>

            {/* Locality search: highlight Ward + Prabhag mapping first */}
            {resultMethod === "locality" && (
              <div className="grid sm:grid-cols-2 gap-3 mb-6 rounded-xl bg-civic-blue/5 border border-civic-blue/15 p-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {en ? "Prabhag Number" : "प्रभाग क्रमांक"}
                  </dt>
                  <dd className="font-serif text-lg font-bold text-civic-blue mt-0.5">
                    {en
                      ? result.prabhagNumber
                      : toDevanagariDigits(result.prabhagNumber)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {en ? "Ward Number" : "वॉर्ड क्रमांक"}
                  </dt>
                  <dd className="font-serif text-lg font-bold text-civic-blue mt-0.5">
                    {result.wardNumber
                      ? en
                        ? result.wardNumber
                        : toDevanagariDigits(result.wardNumber)
                      : en
                        ? "—"
                        : "—"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {en ? "Prabhag Population" : "प्रभाग लोकसंख्या"}
                  </dt>
                  <dd className="font-semibold text-foreground mt-0.5">
                    {formatNum(result.population, en)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {en ? "Corporators in this Prabhag" : "या प्रभागातील नगरसेवक"}
                  </dt>
                  <dd className="font-semibold text-foreground mt-0.5 flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-civic-red" />
                    {formatNum(result.corporators.length, en)}
                  </dd>
                </div>
              </div>
            )}

            {/* Prabhag search: compact meta row */}
            {resultMethod === "prabhag" && (
              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6 text-sm">
                {result.wardNumber && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {en ? "Ward Number" : "वॉर्ड क्रमांक"}
                    </dt>
                    <dd className="font-semibold text-foreground mt-0.5">
                      {en ? result.wardNumber : toDevanagariDigits(result.wardNumber)}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {en ? "Population" : "लोकसंख्या"}
                  </dt>
                  <dd className="font-semibold text-foreground mt-0.5">
                    {formatNum(result.population, en)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {en ? "Corporators" : "नगरसेवक"}
                  </dt>
                  <dd className="font-semibold text-foreground mt-0.5 flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-civic-red" />
                    {formatNum(result.corporators.length, en)}
                  </dd>
                </div>
              </dl>
            )}

            {result.corporators.length > 0 && (
              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1">
                  <UserRound className="h-3 w-3 text-civic-red" />
                  {resultMethod === "locality"
                    ? en
                      ? `Elected Corporators of Prabhag ${result.prabhagNumber}`
                      : `प्रभाग ${toDevanagariDigits(result.prabhagNumber)} चे नगरसेवक`
                    : en
                      ? "Elected Corporators"
                      : "निवडून आलेले नगरसेवक"}
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {result.corporators.map((corp) => (
                    <div
                      key={`${corp.seat}-${corp.nameEn}`}
                      className="rounded-lg border border-border p-3 bg-civic-blue/[0.03]"
                    >
                      <div className="flex items-start gap-2">
                        <span className="shrink-0 h-7 w-7 rounded-md bg-civic-blue text-white text-xs font-bold grid place-items-center">
                          {seatLabel(corp.seat, en)}
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-civic-blue leading-snug">
                            {en ? corp.nameEn : corp.nameMr}
                          </p>
                          {corp.phones[0] && (
                            <a
                              href={`tel:${corp.phones[0]}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-civic-blue mt-1 hover:text-civic-red"
                            >
                              <Phone className="h-3 w-3" />
                              {en ? corp.phones[0] : toDevanagariDigits(corp.phones[0])}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(() => {
              const nearby = nearbyLocalitiesInPrabhag(
                result.localities,
                result.matchedLocality
              );
              if (nearby.length === 0) return null;
              return (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-civic-red" />
                    {en
                      ? "Major Localities in the Prabhag"
                      : "प्रभागातील प्रमुख स्थानिक वस्ती"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {nearby.map((loc) => (
                      <span
                        key={loc}
                        className="text-[10px] border rounded-full px-2 py-0.5 bg-civic-blue/8 border-civic-blue/20 text-civic-blue"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default KnowYourCorporator;
