"use client";

import Image from "next/image";
import { useState } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  note?: string;
  eager?: boolean;
  sizes?: string;
  quality?: 90 | 95 | 100;
  objectPosition?: string;
  children?: React.ReactNode;
};

export function AssetImage({
  src,
  alt,
  className = "",
  label = "ASSET",
  note = "Finales Asset folgt.",
  eager = false,
  sizes = "100vw",
  quality = 95,
  objectPosition = "50% 50%",
  children
}: AssetImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`asset-slot asset-image ${className}`}
      data-loaded={loaded}
      data-quality={quality}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={eager}
        style={{
          objectFit: "cover",
          objectPosition
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />

      {!loaded && (
        <div className="asset-slot__meta">
          <span>{label}</span>
          <strong>{note}</strong>
        </div>
      )}

      {children}
    </div>
  );
}
