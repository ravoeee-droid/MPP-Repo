"use client";

import { useState } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  note?: string;
  eager?: boolean;
  children?: React.ReactNode;
};

export function AssetImage({
  src,
  alt,
  className = "",
  label = "ASSET",
  note = "Finales Asset folgt.",
  eager = false,
  children
}: AssetImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`asset-slot asset-image ${className}`} data-loaded={loaded}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
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
