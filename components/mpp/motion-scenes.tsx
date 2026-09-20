"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function MotionScenes() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".hero__copy > *", {
        y: 30,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.08
      });

      gsap.from(".hero__visual-wrap", {
        x: 36,
        opacity: 0,
        duration: 1.05,
        ease: "power3.out",
        delay: 0.14
      });

      gsap.from(".operating-line--hero .operating-line__rail", {
        scaleX: 0,
        duration: 1.15,
        ease: "power3.out",
        transformOrigin: "left center",
        delay: 0.34
      });

      gsap.from(".operating-line--hero .operating-line__node", {
        scale: 0,
        duration: 0.42,
        ease: "back.out(1.8)",
        stagger: 0.12,
        delay: 0.5
      });

      gsap.from(".os-hero__copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: ".os-hero",
          start: "top 78%",
          once: true
        }
      });

      gsap.from(".os-hero__visual", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.05,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".os-hero__visual",
          start: "top 82%",
          once: true
        }
      });

      gsap.from(".os-flow__rail", {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: ".os-flow",
          start: "top 82%",
          end: "bottom 45%",
          scrub: 0.6
        }
      });

      gsap.from(".os-pillar__icon", {
        scale: 0.55,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.6)",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".os-flow",
          start: "top 73%",
          once: true
        }
      });

      gsap.utils.toArray<HTMLElement>(".service-panel").forEach((element, index) => {
        gsap.from(element, {
          y: 28 + index * 5,
          opacity: 0,
          duration: 0.88,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true
          }
        });
      });

      gsap.from(".founder-golden__visual", {
        clipPath: "inset(0 0 0 100%)",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".founder-golden",
          start: "top 77%",
          once: true
        }
      });

      gsap.from(".founder-golden__copy > *", {
        y: 24,
        opacity: 0,
        duration: 0.78,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-golden__copy",
          start: "top 80%",
          once: true
        }
      });

      gsap.from(".process-golden__timeline i", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.75,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".process-golden__grid",
          start: "top 78%",
          once: true
        }
      });

      gsap.from(".process-golden__node", {
        scale: 0,
        duration: 0.38,
        stagger: 0.12,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: ".process-golden__grid",
          start: "top 78%",
          once: true
        }
      });

      const revealSelectors = [
        ".problem__friction-cell",
        ".proof-case",
        ".trust-card",
        ".fit-row",
        ".insight-card",
        ".faq-item"
      ];

      gsap.utils.toArray<HTMLElement>(revealSelectors.join(", ")).forEach((element) => {
        gsap.from(element, {
          y: 28,
          opacity: 0,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true
          }
        });
      });

      gsap.from(".final-cta__growth i", {
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.12,
        duration: 0.62,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".final-cta__growth",
          start: "top 90%",
          once: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
