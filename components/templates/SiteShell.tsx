import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { MotionDirector } from "@/components/organisms/MotionDirector";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <div className="reading-route" aria-hidden="true" />
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <MotionDirector />
    </div>
  );
}
