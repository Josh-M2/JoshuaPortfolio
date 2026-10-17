"use client";

import Image from "next/image";
import { useState } from "react";

export function PreviewImage({ src, alt, title, mobile = false }: { src: string; alt: string; title: string; mobile?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="project-preview__fallback" role="img" aria-label={`${title} screenshot unavailable`}>
        <span>Project preview</span>
        <strong>{title}</strong>
        <small>Screenshot temporarily unavailable</small>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={mobile ? "320px" : "(max-width: 700px) calc(100vw - 72px), (max-width: 1240px) 48vw, 620px"}
      onError={() => setFailed(true)}
    />
  );
}
