import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { normalizeVoiceTranscript, pickRecognitionLang, voiceStatusMessage } from "@/lib/browserVoice";
import { searchHits, suggestDidYouMean } from "@/lib/unifiedSearch";

describe("browser voice", () => {
  it("normalizes punctuation, spacing and immediate repeats without translating", () => {
    expect(normalizeVoiceTranscript("  Property   Tax. ")).toBe("Property Tax");
    expect(normalizeVoiceTranscript("birth birth certificate")).toBe("birth certificate");
    expect(normalizeVoiceTranscript("जन्म प्रमाणपत्र।")).toBe("जन्म प्रमाणपत्र");
    expect(normalizeVoiceTranscript("Propery Tax")).toBe("Propery Tax");
  });

  it("picks the browser language and only then the site language", () => {
    expect(pickRecognitionLang("mr", ["en-IN", "mr-IN"], false)).toBe("en-IN");
    expect(pickRecognitionLang("en", ["mr-IN", "en-IN"], false)).toBe("mr-IN");
    expect(pickRecognitionLang("mr", ["en-US"], true)).toBe("mr-IN");
    expect(pickRecognitionLang("mr", [], false)).toBe("mr-IN");
    expect(pickRecognitionLang("en", [], false)).toBe("en-IN");
  });

  it("keeps voice errors out of the query text", () => {
    expect(voiceStatusMessage("no-speech", true)).toMatch(/No speech detected/);
    expect(voiceStatusMessage("not-allowed", true)).toMatch(/Microphone permission is blocked/);
    expect(voiceStatusMessage("not-supported", true)).toMatch(/not supported/);
    expect(voiceStatusMessage("aborted", true)).toBe("");
  });

  it("sends a normalized transcript through the same search pipeline as typing", () => {
    const spoken = normalizeVoiceTranscript("property  tax.");
    expect(searchHits(spoken)[0]?.record.id).toBe(searchHits("property tax")[0]?.record.id);
    expect(suggestDidYouMean(normalizeVoiceTranscript("Propery Tax"))).toMatch(/Property Tax/i);
  });

  it("uses one browser recognizer and no external transcription", () => {
    const source = readFileSync("src/components/site/GlobalSearch.tsx", "utf8");
    expect(source).toMatch(/interimResults = true/);
    expect(source).toMatch(/maxAlternatives = 1/);
    expect(source).toMatch(/continuous = false/);
    expect(source).toMatch(/recognitionRef\.current !== recognition/);
    expect(source).not.toMatch(/groq|gemini|whisper|openai|MediaRecorder|getUserMedia/i);
  });
});
