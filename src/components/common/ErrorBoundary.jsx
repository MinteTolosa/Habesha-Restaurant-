import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Day 9: Error Boundary catches rendering errors below this component.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-[70vh] place-items-center px-6">
          <div className="max-w-lg text-center">
            <p className="section-kicker">Something went wrong</p>
            <h1 className="mt-3 font-display text-4xl font-bold">
              The kitchen needs a moment.
            </h1>
            <p className="mt-3 text-muted">
              Please refresh the page and try again.
            </p>
            <button
              className="mt-6 rounded-lg bg-brand-600 px-5 py-3 font-bold text-white"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}