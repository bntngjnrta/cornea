"use client";

import React from "react";
import { TextEffect } from "@/components/motion/text-effect";
import { AnimatedGroup } from "@/components/motion/animated-group";
import LogoCloud from "@/components/sections/logo-cloud";
import { useT } from "@/i18n";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0.01px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  const t = useT();
  return (
    <div className="overflow-hidden min-h-screen">
      <section>
        <div className="relative pt-24 md:pt-36">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="absolute inset-0 -z-20"
          >
            <div className="h-screen xl:h-auto absolute inset-2 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <video
                autoPlay
                loop
                muted
                preload="auto"
                className="size-full -scale-x-100 object-cover opacity-50 invert-0 dark:opacity-35 dark:invert"
              >
                <source src="/hero-light.mp4" type="video/mp4" />
              </video>
            </div>
          </AnimatedGroup>

          <div className="absolute inset-0 -z-10 size-full"></div>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 text-balance text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-semibold"
              >
                {t.hero.heading}
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-2xl text-balance text-lg"
              >
                {t.hero.subheading}
              </TextEffect>
            </div>
          </div>
        </div>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.85,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
            <LogoCloud />
          </div>
        </AnimatedGroup>
      </section>
    </div>
  );
}
