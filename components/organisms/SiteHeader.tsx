"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { profile } from "@/config/content";

const links = [
  { href: "/#work", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-brand" href="/" aria-label={`${profile.name}, home`} aria-current={pathname === "/" ? "page" : undefined}>
          <span className="site-brand__mark" aria-hidden="true">JM</span>
          <span className="site-brand__name">{profile.name}</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => <Link href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
          <Link className="site-nav__contact" href="/#contact">Contact</Link>
        </nav>
        <details className="mobile-nav" onKeyDown={(event) => {
          if (event.key === "Escape" && event.currentTarget.open) {
            event.currentTarget.open = false;
            event.currentTarget.querySelector<HTMLElement>("summary")?.focus();
          }
        }}>
          <summary><Menu size={19} aria-hidden="true" /> Menu</summary>
          <nav className="mobile-nav__panel" aria-label="Mobile navigation" onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
              event.currentTarget.closest("details")?.removeAttribute("open");
            }
          }}>
            {links.map((link) => <Link href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
            <Link href="/#contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
