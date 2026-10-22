/**
 * Browser SpeechRecognition helpers.
 * Transcripts are text only. Audio is never read, uploaded, or stored.
 */

export type VoicePhase = "idle" | "listening" | "processing" | "error";

export function voiceStartErrorCode(error: unknown): string {
  const name =
    typeof error === "object" && error !== null && "name" in error && typeof error.name === "string"
      ? error.name
      : "";
  switch (name) {
    case "NotAllowedError":
      return "not-allowed";
    case "SecurityError":
      return "insecure-context";
    case "NotFoundError":
    case "DevicesNotFoundError":
      return "audio-capture";
    case "NetworkError":
      return "network";
    default:
      return "unknown";
  }
}

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

/** Use the selected site language; do not silently switch to browser preferences. */
export function pickRecognitionLang(siteLang: "en" | "mr"): "en-IN" | "mr-IN" {
  return siteLang === "mr" ? "mr-IN" : "en-IN";
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
    case "permission-denied":
      return en
        ? "Microphone permission is blocked. Please allow microphone access for this site."
        : "मायक्रोफोन परवानगी अवरोधित आहे. या संकेतस्थळासाठी मायक्रोफोन परवानगी द्या.";
    case "insecure-context":
      return en
        ? "Voice search requires a secure HTTPS page. Open this site over HTTPS, or use text search."
        : "आवाज शोधासाठी सुरक्षित HTTPS पृष्ठ आवश्यक आहे. संकेतस्थळ HTTPS वर उघडा किंवा मजकूर शोध वापरा.";
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
