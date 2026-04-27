import { Component, ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; error?: Error; }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
          <h1 style={{ color: "#1a3a6b" }}>Chhatrapati Sambhajinagar Municipal Corporation</h1>
          <p style={{ color: "#666", marginTop: "1rem" }}>
            The page encountered an error. Please{" "}
            <a href="/" style={{ color: "#1a3a6b" }}>click here to reload</a>.
          </p>
          {import.meta.env.DEV && (
            <pre style={{ marginTop: "1rem", textAlign: "left", background: "#f5f5f5", padding: "1rem", borderRadius: "8px", fontSize: "12px", overflow: "auto" }}>
              {this.state.error?.message}
            </pre>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
