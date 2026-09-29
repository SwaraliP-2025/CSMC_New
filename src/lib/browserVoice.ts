/**
 * Browser SpeechRecognition helpers.
 * Transcripts are text only. Audio is never read, uploaded, or stored.
 */

export type VoicePhase = "idle" | "listening" | "processing" | "error";

export function normalizeVoiceTranscript(raw: string): string {
  const cleaned = raw
    .normalize("NFC")
    .replace(/[\u00A0\u202F\u2007]/g, " ")
    .replace(/[.,!?;:।॥]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return "";
  const parts = cleaned.split(" ");
  const out: string[] = [];
  for (const part of parts) {
    const prev = out[out.length - 1];
    if (prev && prev.toLocaleLowerCase() === part.toLocaleLowerCase()) continue;
    out.push(part);
  }
  return out.join(" ");
}

/** Browser language first, site language only when the browser has neither English nor Marathi. */
export function pickRecognitionLang(siteLang: "en" | "mr", navigatorLangs: readonly string[], useAlternate: boolean): "en-IN" | "mr-IN" {
  const prefs = navigatorLangs.map((lang) => lang.toLowerCase());
  const first = prefs[0] ?? "";
  let primary: "en-IN" | "mr-IN";
  if (first.startsWith("mr")) primary = "mr-IN";
  else if (first.startsWith("en")) primary = "en-IN";
  else if (prefs.some((lang) => lang.startsWith("mr")) && !prefs.some((lang) => lang.startsWith("en"))) primary = "mr-IN";
  else if (prefs.some((lang) => lang.startsWith("en"))) primary = "en-IN";
  else primary = siteLang === "mr" ? "mr-IN" : "en-IN";
  if (!useAlternate) return primary;
  return primary === "mr-IN" ? "en-IN" : "mr-IN";
}

export function voiceStatusMessage(code: string, en: boolean): string {
  switch (code) {
    case "listening":
      return en ? "Listening…" : "ऐकत आहे…";
    case "processing":
      return en ? "Finishing…" : "पूर्ण होत आहे…";
    case "no-speech":
      return en ? "No speech detected. Please try again." : "आवाज ऐकू आला नाही. कृपया पुन्हा प्रयत्न करा.";
    case "not-allowed":
    case "service-not-allowed":
      return en
        ? "Microphone permission is blocked. Please allow microphone access for this site."
        : "मायक्रोफोन परवानगी अवरोधित आहे. या संकेतस्थळासाठी मायक्रोफोन परवानगी द्या.";
    case "audio-capture":
      return en
        ? "No microphone was found. Check the device and try again."
        : "मायक्रोफोन सापडला नाही. डिव्हाइस तपासा आणि पुन्हा प्रयत्न करा.";
    case "network":
      return en
        ? "Voice recognition could not reach the browser speech service. Please try again."
        : "ब्राउझरची वाचा ओळख सेवा उपलब्ध नाही. कृपया पुन्हा प्रयत्न करा.";
    case "language-not-supported":
      return en
        ? "This voice language is not supported by the browser. Please try again."
        : "ही आवाज भाषा ब्राउझरवर समर्थित नाही. कृपया पुन्हा प्रयत्न करा.";
    case "not-supported":
      return en ? "Voice search is not supported by this browser." : "या ब्राउझरमध्ये आवाज शोध समर्थित नाही.";
    case "aborted":
      return "";
    default:
      return en
        ? "Voice search could not hear that. Please try again or type your search."
        : "आवाज शोध पूर्ण झाला नाही. पुन्हा प्रयत्न करा किंवा शोध टाइप करा.";
  }
}

export function voiceDebug(detail: Record<string, unknown>) {
  if (import.meta.env.DEV) console.info("[csmc-voice]", detail);
}
