import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createElement } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { GlobalSearch } from "@/components/site/GlobalSearch";
import { normalizeVoiceTranscript, pickRecognitionLang, voiceStartErrorCode, voiceStatusMessage } from "@/lib/browserVoice";
import { searchHits, suggestDidYouMean } from "@/lib/unifiedSearch";

const originalSpeechRecognition = Object.getOwnPropertyDescriptor(window, "SpeechRecognition");
const originalWebkitSpeechRecognition = Object.getOwnPropertyDescriptor(window, "webkitSpeechRecognition");

afterEach(() => {
  if (originalSpeechRecognition) Object.defineProperty(window, "SpeechRecognition", originalSpeechRecognition);
  else Reflect.deleteProperty(window, "SpeechRecognition");
  if (originalWebkitSpeechRecognition) Object.defineProperty(window, "webkitSpeechRecognition", originalWebkitSpeechRecognition);
  else Reflect.deleteProperty(window, "webkitSpeechRecognition");
  vi.restoreAllMocks();
});

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
    expect(voiceStatusMessage("audio-capture", true)).toMatch(/No microphone was found/);
    expect(voiceStatusMessage("network", true)).toMatch(/speech service/);
    expect(voiceStatusMessage("not-supported", true)).toMatch(/not supported/);
    expect(voiceStatusMessage("aborted", true)).toBe("");
  });

  it("maps browser microphone/start failures to actionable feedback", () => {
    expect(voiceStartErrorCode(new DOMException("Denied", "NotAllowedError"))).toBe("not-allowed");
    expect(voiceStartErrorCode(new DOMException("No device", "NotFoundError"))).toBe("audio-capture");
    expect(voiceStartErrorCode(new DOMException("Offline", "NetworkError"))).toBe("network");
  });

  it("keeps text search available and explains when speech recognition is unsupported", () => {
    Object.defineProperty(window, "SpeechRecognition", { configurable: true, value: undefined });
    Object.defineProperty(window, "webkitSpeechRecognition", { configurable: true, value: undefined });
    render(
      createElement(MemoryRouter, null, createElement(LanguageProvider, null, createElement(GlobalSearch))),
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("status").textContent).toMatch(/not supported|समर्थित/);
    expect(screen.getByRole("button", { name: /not supported|समर्थित/ })).toBeDisabled();
  });

  it("detects the vendor-prefixed speech recognition implementation", () => {
    class PrefixedRecognition {
      start() {}
      stop() {}
      abort() {}
    }
    Object.defineProperty(window, "SpeechRecognition", { configurable: true, value: undefined });
    Object.defineProperty(window, "webkitSpeechRecognition", { configurable: true, value: PrefixedRecognition });
    render(
      createElement(MemoryRouter, null, createElement(LanguageProvider, null, createElement(GlobalSearch))),
    );
    expect(screen.getByRole("button", { name: /Voice search|आवाजाने शोधा/ })).toBeEnabled();
  });

  it("reports recognition errors while leaving the text query usable", () => {
    class MockRecognition {
      lang = "";
      continuous = false;
      interimResults = false;
      maxAlternatives = 0;
      onresult: ((event: { results: ArrayLike<{ isFinal?: boolean; 0?: { transcript: string } }> }) => void) | null = null;
      onerror: ((event: { error?: string }) => void) | null = null;
      onend: (() => void) | null = null;
      onspeechend: (() => void) | null = null;
      start() {
        this.onerror?.({ error: "network" });
        this.onend?.();
      }
      stop() {}
      abort() {}
    }
    Object.defineProperty(window, "SpeechRecognition", { configurable: true, value: MockRecognition });
    render(
      createElement(MemoryRouter, null, createElement(LanguageProvider, null, createElement(GlobalSearch))),
    );
    fireEvent.click(screen.getByRole("button", { name: /Voice search|आवाजाने शोधा/ }));
    expect(screen.getByRole("status").textContent).toMatch(/speech service|वाचा ओळख सेवा/);
    expect(screen.getByRole("combobox")).toBeEnabled();
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
