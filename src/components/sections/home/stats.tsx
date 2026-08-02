"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";
import { useT } from "@/i18n";

export default function StatsSection() {
  const t = useT();

  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              {t.stats.heading}
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>{t.stats.subheading}</p>
          </ScrollView>
        </div>
        <ScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            {t.stats.items.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0.01px)" },
                }}
                className="space-y-4"
              >
                <div className="text-5xl font-bold">{item.value}</div>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
