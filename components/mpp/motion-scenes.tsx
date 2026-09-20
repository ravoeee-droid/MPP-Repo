"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionScenes() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".hero__copy > *", {
        y: 38,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
      });

      gsap.from(".hero__visual-wrap", {
        x: 44,
        opacity: 0,
        duration: 1.15,
        ease: "power3.out",
        delay: 0.18
      });

      gsap.from(".operating-line__rail", {
        scaleX: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.4
      });

      gsap.utils.toArray<HTMLElement>(
        ".os-card, .service-panel, .problem__friction-cell, .process-step, .proof-case"
      ).forEach((element) => {
        gsap.from(element, {
          y: 34,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true
          }
        });
      });

      gsap.from(".founder__media", {
        scale: 0.965,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder",
          start: "top 72%",
          once: true
        }
      });

      gsap.from(".founder__content > *", {
        y: 26,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder__content",
          start: "top 78%",
          once: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
