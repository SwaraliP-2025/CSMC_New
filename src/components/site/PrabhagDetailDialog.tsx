import { MapPin, Phone, UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLang } from "@/i18n/LanguageContext";
import { formatNum, seatLabel, toDevanagariDigits } from "@/lib/prabhagFormat";
import type { Corporator, Prabhag } from "@/types/corporator";

type Props = {
  prabhag: Prabhag | null;
  corporators: Corporator[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/** Reusable prabhag modal — corporators + locality chips (Zones & Wards, Know Your Corporator). */
export function PrabhagDetailDialog({
  prabhag,
  corporators,
  open,
  onOpenChange,
}: Props) {
  const { lang, setLang } = useLang();
  const en = lang === "en";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!top-24 sm:!top-28 !left-1/2 !-translate-x-1/2 !translate-y-0 max-w-lg w-[calc(100%-1.5rem)] max-h-[calc(100dvh-7.5rem)] overflow-hidden flex flex-col gap-0 p-0 sm:rounded-xl">
        {prabhag && (
          <>
            <DialogHeader className="shrink-0 bg-background px-4 pt-3.5 pb-2.5 pr-10 border-b border-border text-left space-y-1">
              <div className="flex items-start justify-between gap-3 pr-4">
                <div className="min-w-0">
                  <DialogTitle className="font-serif text-base text-civic-blue leading-tight">
                    {en
                      ? `Prabhag ${prabhag.no}`
                      : `प्रभाग ${toDevanagariDigits(prabhag.no)}`}
                  </DialogTitle>
                  <DialogDescription className="text-sm leading-snug mt-1.5 text-muted-foreground">
                    {en
                      ? `${prabhag.seats} Seats · Population ${prabhag.population.toLocaleString("en-IN")}`
                      : `${formatNum(prabhag.seats, false)} आसने · लोकसंख्या ${formatNum(prabhag.population, false)}`}
                  </DialogDescription>
                </div>
                <div className="shrink-0 flex items-center gap-0.5 rounded-full border border-border bg-muted/40 p-0.5">
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-colors ${
                      en ? "bg-civic-blue text-white" : "text-muted-foreground hover:text-civic-blue"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("mr")}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-colors ${
                      !en ? "bg-civic-blue text-white" : "text-muted-foreground hover:text-civic-blue"
                    }`}
                  >
                    मराठी
                  </button>
                </div>
              </div>
            </DialogHeader>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3 pb-8 space-y-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1">
                  <UserRound className="h-3 w-3 text-civic-red" />
                  {en
                    ? `Elected Corporators (${corporators.length})`
                    : `नगरसेवक (${toDevanagariDigits(corporators.length)})`}
                </p>

                {corporators.length === 0 ? (
                  <p className="text-xs text-muted-foreground">
                    {en
                      ? "Corporator details for this prabhag will be updated soon."
                      : "या प्रभागासाठी नगरसेवक तपशील लवकरच अद्ययावत केले जातील."}
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {corporators.map((corp) => (
                      <div
                        key={`${corp.seat}-${corp.nameEn}`}
                        className="rounded-lg border border-border bg-white p-2.5"
                      >
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 h-6 w-6 rounded-md bg-civic-blue text-white text-[11px] font-bold grid place-items-center">
                            {seatLabel(corp.seat, en)}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-xs text-civic-blue leading-snug break-words">
                              {en ? corp.nameEn : corp.nameMr}
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug break-words">
                              <span className="font-semibold text-foreground/70">
                                {en ? "Address:" : "पत्ता:"}{" "}
                              </span>
                              {en ? corp.addressEn : corp.addressMr}
                            </p>
                            <div className="mt-1 flex flex-wrap gap-x-2 gap-y-0.5">
                              {corp.phones.map((phone) => (
                                <a
                                  key={phone}
                                  href={`tel:${phone}`}
                                  className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-civic-blue hover:text-civic-red transition-colors"
                                >
                                  <Phone className="h-2.5 w-2.5" />
                                  {en ? phone : toDevanagariDigits(phone)}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-1.5 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-civic-red" />
                  {en ? "Important Localities" : "महत्त्वाची परिसरे"}
                </p>
                <div className="flex flex-wrap gap-1.5 content-start">
                  {prabhag.localities.map((loc) => (
                    <span
                      key={loc}
                      className="text-[10px] bg-civic-blue/8 border border-civic-blue/20 text-civic-blue rounded-full px-2 py-0.5 leading-normal"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
