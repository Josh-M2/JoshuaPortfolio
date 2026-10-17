"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="container error-state" role="alert">
      <h1>This page could not load.</h1>
      <p>Please try again. If the problem continues, return to the portfolio home page.</p>
      <div className="error-state__actions">
        <button className="button" onClick={reset}>Try again</button>
        <Link className="text-link" href="/">Go to home</Link>
      </div>
    </div>
  );
}
