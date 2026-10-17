import Link from "next/link";
import { SiteShell } from "@/components/templates/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="container page-intro">
        <h1>Page not found.</h1>
        <p>The address may have changed. You can return to the portfolio or explore the projects.</p>
        <Link className="button" href="/">Go to portfolio</Link>
      </div>
    </SiteShell>
  );
}
