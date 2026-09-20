"use client";

import { useState } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  note?: string;
  children?: React.ReactNode;
};

export function AssetImage({
  src,
  alt,
  className = "",
  label = "ASSET",
  note = "Finales Asset folgt.",
  children
}: AssetImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`asset-slot asset-image ${className}`} data-loaded={loaded}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
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
