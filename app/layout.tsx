import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/config/content";
import { siteUrl } from "@/config/site-url";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Full-Stack TypeScript Developer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Joshua L. Magdadaro builds TypeScript applications, backend services, Next.js interfaces, and AWS workflows. Explore projects and experience.",
  openGraph: {
    title: `${profile.name} — Full-Stack TypeScript Developer`,
    description: "Projects, experience, and engineering approach.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
