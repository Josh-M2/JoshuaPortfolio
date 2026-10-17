"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealTargets = [
  [".section-heading", "heading"],
  [".project-row", "project"],
  [".experience-item", "experience"],
  [".education-note", "quiet"],
  [".skill-group", "skill"],
  [".contact-panel", "contact"],
  [".project-detail__visual", "project-visual"],
  [".project-detail__body > div", "detail"],
  [".related-work a", "quiet"],
  [".resume-sheet section", "quiet"],
] as const;

export function MotionDirector() {
  const pathname = usePathname();

  useEffect(() => {
    const route = document.querySelector<HTMLElement>(".reading-route");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = revealTargets.flatMap(([selector, kind]) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector), (element) => {
        element.dataset.reveal = kind;
        return element;
      }),
    );

    let observer: IntersectionObserver | undefined;
    let frame = 0;

    const show = (element: HTMLElement) => {
      element.dataset.revealState = "visible";
      observer?.unobserve(element);
    };

    const prepare = () => {
      observer?.disconnect();

      if (preference.matches || !("IntersectionObserver" in window)) {
        elements.forEach(show);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) show(entry.target as HTMLElement);
          });
        },
        { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
      );

      elements.forEach((element) => {
        if (element.dataset.revealState === "visible") return;
        if (element.getBoundingClientRect().top < window.innerHeight * 0.91) {
          show(element);
        } else {
          element.dataset.revealState = "pending";
          observer?.observe(element);
        }
      });
    };

    const updateRoute = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      route?.style.setProperty("--route-progress", progress.toFixed(4));
    };

    const scheduleRoute = () => {
      if (!frame) frame = window.requestAnimationFrame(updateRoute);
    };

    const revealFocused = (event: FocusEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const pending = target.closest<HTMLElement>('[data-reveal-state="pending"]');
      if (pending) show(pending);
    };

    prepare();
    updateRoute();
    preference.addEventListener("change", prepare);
    document.addEventListener("focusin", revealFocused);
    window.addEventListener("scroll", scheduleRoute, { passive: true });
    window.addEventListener("resize", scheduleRoute);

    return () => {
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      preference.removeEventListener("change", prepare);
      document.removeEventListener("focusin", revealFocused);
      window.removeEventListener("scroll", scheduleRoute);
      window.removeEventListener("resize", scheduleRoute);
    };
  }, [pathname]);

  return null;
}
