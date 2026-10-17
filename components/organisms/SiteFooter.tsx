import Link from "next/link";
import { profile } from "@/config/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
        <Link href="/resume">View resume</Link>
      </div>
    </footer>
  );
}
