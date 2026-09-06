"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "./image-placeholder";

const EXTS = [".jpeg", ".jpg", ".png", ".webp"];

type Props = {
  slug: string;
  index: number;
  className?: string;
  label?: string;
};

export function ImageOrPlaceholder({ slug, index, className = "", label }: Props) {
  const [extIdx, setExtIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <ImagePlaceholder className={className} label={label} />;
  }

  const src = `/images/${slug}-${index}${EXTS[extIdx]}`;

  return (
    <div className={`relative overflow-hidden rounded-[var(--radius-lg)] ${className}`}>
      <Image
        key={src}
        src={src}
        alt={label ?? ""}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        onError={() => {
          if (extIdx + 1 < EXTS.length) {
            setExtIdx((i) => i + 1);
          } else {
            setFailed(true);
          }
        }}
      />
    </div>
  );
}
