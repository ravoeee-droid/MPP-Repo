"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function MotionScenes() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const cleanups: Array<() => void> = [];

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTimeline
          .from(".hero__copy > *", {
            y: 34,
            opacity: 0,
            duration: 0.95,
            stagger: 0.075
          })
          .from(
            ".hero__visual-wrap",
            {
              x: 42,
              opacity: 0,
              duration: 1.12
            },
            0.12
          )
          .from(
            ".operating-line--hero .operating-line__rail",
            {
              scaleX: 0,
              duration: 1.15,
              transformOrigin: "left center"
            },
            0.38
          )
          .from(
            ".operating-line--hero .operating-line__node",
            {
              scale: 0,
              duration: 0.42,
              ease: "back.out(1.8)",
              stagger: 0.12
            },
            0.53
          );

        gsap.from(".hero-wow__signal", {
          y: 18,
          opacity: 0,
          duration: 0.68,
          ease: "power3.out",
          stagger: 0.11,
          delay: 0.28
        });

        gsap.from(".hero-wow__marquee span", {
          y: 18,
          opacity: 0,
          duration: 0.7,
          stagger: 0.07,
          delay: 0.46,
          ease: "power3.out"
        });

        const heroImg = document.querySelector<HTMLElement>(".hero__visual img");
        if (heroImg) {
          gsap.fromTo(
            heroImg,
            { yPercent: -1.2, scale: 1.015 },
            {
              yPercent: 2.4,
              scale: 1.035,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 0.8
              }
            }
          );
        }

        gsap.utils
          .toArray<HTMLElement>(".mission-story__chapter")
          .forEach((chapter, index) => {
            gsap.from(chapter.querySelector(".mission-story__chapter-copy"), {
              y: 34,
              opacity: 0,
              duration: 0.86,
              delay: index * 0.04,
              ease: "power3.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 82%",
                once: true
              }
            });

            const pulse = chapter.querySelector<HTMLElement>(".mission-story__pulse i");
            if (pulse) {
              gsap.from(pulse, {
                scale: 0,
                duration: 0.42,
                ease: "back.out(1.8)",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 72%",
                  once: true
                }
              });
            }
          });

        gsap.from(".mission-story__statement > *", {
          y: 12,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mission-story__statement",
            start: "top 90%",
            once: true
          }
        });

        gsap.utils
          .toArray<HTMLElement>(".employer-story__chapter")
          .forEach((chapter, index) => {
            gsap.from(chapter.querySelector(".employer-story__copy"), {
              x: 40,
              opacity: 0,
              duration: 0.9,
              delay: index * 0.035,
              ease: "power3.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 84%",
                once: true
              }
            });

            const node = chapter.querySelector<HTMLElement>(".employer-story__node");
            if (node) {
              gsap.from(node, {
                scale: 0,
                duration: 0.4,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 74%",
                  once: true
                }
              });
            }
          });

        gsap.from(".os-hero__copy > *", {
          y: 30,
          opacity: 0,
          duration: 0.82,
          ease: "power3.out",
          stagger: 0.075,
          scrollTrigger: {
            trigger: ".os-hero",
            start: "top 79%",
            once: true
          }
        });

        gsap.from(".os-hero__visual", {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.05,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".os-hero__visual",
            start: "top 84%",
            once: true
          }
        });

        gsap.fromTo(
          ".os-flow__rail",
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: {
              trigger: ".os-flow",
              start: "top 82%",
              end: "bottom 46%",
              scrub: 0.5
            }
          }
        );

        gsap.utils.toArray<HTMLElement>(".os-pillar").forEach((pillar, index) => {
          const icon = pillar.querySelector<HTMLElement>(".os-pillar__icon");
          const orbit = pillar.querySelector<HTMLElement>(".os-pillar__orbit");

          if (icon) {
            gsap.from(icon, {
              scale: 0.58,
              opacity: 0,
              duration: 0.58,
              delay: index * 0.08,
              ease: "back.out(1.55)",
              scrollTrigger: {
                trigger: pillar,
                start: "top 80%",
                once: true
              }
            });
          }

          if (orbit) {
            gsap.fromTo(
              orbit,
              { rotate: -4 },
              {
                rotate: 4,
                ease: "none",
                scrollTrigger: {
                  trigger: pillar,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1
                }
              }
            );
          }
        });

        gsap.utils.toArray<HTMLElement>(".service-panel").forEach((panel, index) => {
          gsap.from(panel, {
            y: 32 + index * 5,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 88%",
              once: true
            }
          });

          const media = panel.querySelector<HTMLElement>(".service-panel__media");
          if (media) {
            gsap.from(media, {
              clipPath: index % 2 === 0 ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)",
              duration: 1.05,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: media,
                start: "top 88%",
                once: true
              }
            });
          }
        });

        gsap.from(".founder-golden__visual", {
          clipPath: "inset(0 0 0 100%)",
          duration: 1.05,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".founder-golden",
            start: "top 78%",
            once: true
          }
        });

        gsap.from(".founder-golden__copy > *", {
          y: 26,
          opacity: 0,
          duration: 0.8,
          stagger: 0.075,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founder-golden__copy",
            start: "top 80%",
            once: true
          }
        });

        gsap.from(".founder-golden__signature", {
          x: 18,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founder-golden__visual",
            start: "top 62%",
            once: true
          }
        });

        gsap.utils.toArray<HTMLElement>(".process-golden__step").forEach((step, index) => {
          const visual = step.querySelector<HTMLElement>(".process-golden__visual");
          const line = step.querySelector<HTMLElement>(".process-golden__timeline i");
          const node = step.querySelector<HTMLElement>(".process-golden__node");

          if (visual) {
            gsap.from(visual, {
              clipPath: "inset(100% 0 0 0)",
              duration: 0.92,
              delay: index * 0.06,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: step,
                start: "top 86%",
                once: true
              }
            });
          }

          if (line) {
            gsap.from(line, {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.72,
              delay: index * 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: step,
                start: "top 83%",
                once: true
              }
            });
          }

          if (node) {
            gsap.from(node, {
              scale: 0,
              duration: 0.38,
              delay: 0.08 + index * 0.08,
              ease: "back.out(1.8)",
              scrollTrigger: {
                trigger: step,
                start: "top 83%",
                once: true
              }
            });
          }
        });

        gsap.utils
          .toArray<HTMLElement>(
            ".problem__friction-cell, .proof-case, .trust-card, .fit-row, .insight-card, .faq-item, .service-detail__principles article, .service-story__pains article, .service-method__steps article, .service-outcomes__grid article, .career-strip__grid article, .case-index__card, .insights-index__card"
          )
          .forEach((element) => {
            gsap.from(element, {
              y: 28,
              opacity: 0,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 89%",
                once: true
              }
            });
          });

        gsap.utils
          .toArray<HTMLElement>(
            ".service-detail__visual, .service-story__visual, .service-method__visual, .about-page__visual"
          )
          .forEach((visual, index) => {
            gsap.from(visual, {
              clipPath: index % 2 === 0 ? "inset(0 0 100% 0)" : "inset(0 100% 0 0)",
              duration: 1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: visual,
                start: "top 86%",
                once: true
              }
            });
          });

        gsap.utils
          .toArray<HTMLElement>(
            ".service-detail__hero > div:first-child, .service-story__intro > *, .service-method__copy > *, .service-outcomes__intro > *, .service-detail-cta > *, .about-page__copy > *"
          )
          .forEach((element) => {
            gsap.from(element, {
              y: 26,
              opacity: 0,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
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

        gsap.utils.toArray<HTMLElement>(".asset-image").forEach((container) => {
          if (container.closest(".hero")) return;

          const image = container.querySelector<HTMLElement>("img");
          if (!image) return;

          gsap.fromTo(
            image,
            { yPercent: -1.2, scale: 1.01 },
            {
              yPercent: 1.2,
              scale: 1.025,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              }
            }
          );
        });
      });

      return () => ctx.revert();
    });

    mm.add(
      "(prefers-reduced-motion: no-preference) and (pointer: fine) and (min-width: 900px)",
      () => {
        const targets = gsap.utils.toArray<HTMLElement>(
          ".button--primary, .service-panel__link i"
        );

        targets.forEach((target) => {
          const moveX = gsap.quickTo(target, "x", {
            duration: 0.32,
            ease: "power3.out"
          });
          const moveY = gsap.quickTo(target, "y", {
            duration: 0.32,
            ease: "power3.out"
          });

          const onMove = (event: PointerEvent) => {
            const rect = target.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            moveX(x * 0.1);
            moveY(y * 0.14);
          };

          const onLeave = () => {
            moveX(0);
            moveY(0);
          };

          target.addEventListener("pointermove", onMove);
          target.addEventListener("pointerleave", onLeave);

          cleanups.push(() => {
            target.removeEventListener("pointermove", onMove);
            target.removeEventListener("pointerleave", onLeave);
          });
        });
      }
    );

    ScrollTrigger.refresh();

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      mm.revert();
    };
  }, [pathname]);

  return null;
}
