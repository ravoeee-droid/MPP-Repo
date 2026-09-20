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

type ResolutionState = "pending" | "ok" | "soft";

export function AssetImage({
  src,
  alt,
  className = "",
  label = "ASSET",
  note = "Finales Asset folgt.",
  eager = false,
  sizes = "100vw",
  quality = 100,
  objectPosition = "50% 50%",
  children
}: AssetImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [resolutionState, setResolutionState] =
    useState<ResolutionState>("pending");

  function verifyDeliveredResolution(image: HTMLImageElement) {
    const renderedWidth = image.getBoundingClientRect().width;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const motionSafety = 1.0;
    const requiredWidth = renderedWidth * dpr * motionSafety;
    const isSharpEnough = image.naturalWidth >= requiredWidth * 0.96;

    setResolutionState(isSharpEnough ? "ok" : "soft");

    if (!isSharpEnough && process.env.NODE_ENV !== "production") {
      console.warn(
        `[MPP image quality] ${src} delivered at ${image.naturalWidth}px for ~${Math.round(
          requiredWidth
        )}px required retina width. Check sizes/source resolution.`
      );
    }
  }

  return (
    <div
      className={`asset-slot asset-image ${className}`}
      data-loaded={loaded}
      data-quality={quality}
      data-resolution={resolutionState}
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
        onLoad={(event) => {
          setLoaded(true);
          requestAnimationFrame(() =>
            verifyDeliveredResolution(event.currentTarget)
          );
        }}
        onError={() => {
          setLoaded(false);
          setResolutionState("pending");
        }}
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
