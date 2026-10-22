import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { act, render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createElement } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { GlobalSearch } from "@/components/site/GlobalSearch";
import { normalizeVoiceTranscript, pickRecognitionLang, voiceStartErrorCode, voiceStatusMessage } from "@/lib/browserVoice";
import { searchHits, suggestDidYouMean } from "@/lib/unifiedSearch";

const originalSpeechRecognition = Object.getOwnPropertyDescriptor(window, "SpeechRecognition");
const originalWebkitSpeechRecognition = Object.getOwnPropertyDescriptor(window, "webkitSpeechRecognition");
const originalIsSecureContext = Object.getOwnPropertyDescriptor(window, "isSecureContext");

afterEach(() => {
  if (originalSpeechRecognition) Object.defineProperty(window, "SpeechRecognition", originalSpeechRecognition);
  else Reflect.deleteProperty(window, "SpeechRecognition");
  if (originalWebkitSpeechRecognition) Object.defineProperty(window, "webkitSpeechRecognition", originalWebkitSpeechRecognition);
  else Reflect.deleteProperty(window, "webkitSpeechRecognition");
  if (originalIsSecureContext) Object.defineProperty(window, "isSecureContext", originalIsSecureContext);
  else Reflect.deleteProperty(window, "isSecureContext");
  vi.restoreAllMocks();
});

describe("browser voice", () => {
  it("normalizes punctuation, spacing and immediate repeats without translating", () => {
    expect(normalizeVoiceTranscript("  Property   Tax. ")).toBe("Property Tax");
    expect(normalizeVoiceTranscript("birth birth certificate")).toBe("birth certificate");
    expect(normalizeVoiceTranscript("जन्म प्रमाणपत्र।")).toBe("जन्म प्रमाणपत्र");
    expect(normalizeVoiceTranscript("Propery Tax")).toBe("Propery Tax");
  });

  it("uses the language selected on the website without silently switching", () => {
    expect(pickRecognitionLang("en")).toBe("en-IN");
    expect(pickRecognitionLang("mr")).toBe("mr-IN");
  });

  it("keeps voice errors out of the query text", () => {
    expect(voiceStatusMessage("no-speech", true)).toMatch(/No speech detected/);
    expect(voiceStatusMessage("not-allowed", true)).toMatch(/Microphone permission is blocked/);
    expect(voiceStatusMessage("audio-capture", true)).toMatch(/No microphone was found/);
    expect(voiceStatusMessage("network", true)).toMatch(/speech service/);
    expect(voiceStatusMessage("insecure-context", true)).toMatch(/HTTPS/);
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

  it("explains insecure-context restrictions and keeps the microphone retryable after support returns", () => {
    class MockRecognition {
      start() {}
      stop() {}
      abort() {}
    }
    Object.defineProperty(window, "SpeechRecognition", { configurable: true, value: MockRecognition });
    Object.defineProperty(window, "isSecureContext", { configurable: true, value: false });
    const view = render(
      createElement(MemoryRouter, null, createElement(LanguageProvider, null, createElement(GlobalSearch))),
    );
    expect(screen.getByRole("status").textContent).toMatch(/HTTPS/);
    expect(screen.getByRole("button", { name: /HTTPS/ })).toBeDisabled();
    view.unmount();

    Object.defineProperty(window, "isSecureContext", { configurable: true, value: true });
    render(createElement(MemoryRouter, null, createElement(LanguageProvider, null, createElement(GlobalSearch))));
    expect(screen.getByRole("button", { name: /Voice search|आवाजाने शोधा/ })).toBeEnabled();
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
    expect(screen.getByRole("button", { name: /आवाजाने शोधा/ })).toBeEnabled();
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

  it("inserts a successful transcript and lets the user stop an active session", () => {
    const instances: MockRecognition[] = [];
    class MockRecognition {
      lang = "";
      continuous = false;
      interimResults = false;
      maxAlternatives = 0;
      onresult: ((event: { results: ArrayLike<{ isFinal?: boolean; 0?: { transcript: string } }> }) => void) | null = null;
      onerror: ((event: { error?: string }) => void) | null = null;
      onend: (() => void) | null = null;
      onspeechend: (() => void) | null = null;
      stopCalls = 0;
      constructor() {
        instances.push(this);
      }
      start() {}
      stop() {
        this.stopCalls += 1;
      }
      abort() {}
    }
    Object.defineProperty(window, "SpeechRecognition", { configurable: true, value: MockRecognition });
    render(createElement(MemoryRouter, null, createElement(LanguageProvider, null, createElement(GlobalSearch))));
    fireEvent.click(screen.getByRole("button", { name: /Voice search|आवाजाने शोधा/ }));
    const recognition = instances[0];
    expect(recognition.lang).toBe("mr-IN");
    expect(screen.getByRole("button", { name: /आवाज शोध थांबवा/i })).toBeEnabled();
    const finalResult = Object.assign([{ transcript: "Property Tax" }], { isFinal: true });
    act(() => recognition.onresult?.({ results: [finalResult] }));
    expect(screen.getByRole("combobox")).toHaveValue("Property Tax");
    act(() => recognition.onend?.());
    expect(screen.getByRole("button", { name: /आवाजाने शोधा/ })).toBeEnabled();

    fireEvent.click(screen.getByRole("button", { name: /आवाजाने शोधा/ }));
    const stoppedRecognition = instances[1];
    fireEvent.click(screen.getByRole("button", { name: /आवाज शोध थांबवा/i }));
    expect(stoppedRecognition.stopCalls).toBe(1);
    expect(screen.getByRole("button", { name: /आवाजाने शोधा/ })).toBeEnabled();
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
