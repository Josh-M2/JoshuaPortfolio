import Link from "next/link";
import { SiteShell } from "@/components/templates/SiteShell";

export default function WorkNotFound() {
  return (
    <SiteShell>
      <div className="container page-intro">
        <h1>Project not found.</h1>
        <p>This project is not in the portfolio collection.</p>
        <Link className="button" href="/work">Browse projects</Link>
      </div>
    </SiteShell>
  );
}
