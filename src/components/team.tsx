"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";
import { useT } from "@/i18n";

const memberAvatars = [
  { avatar: "/images/bintang-januarta.png", link: "https://www.linkedin.com/in/kadek-bintang-januarta/" },
  { avatar: "/images/yasmine-manayla.png", link: "#" },
  { avatar: "/images/rona-jannatun.png", link: "#" },
  { avatar: "/images/sheva-yudha.png", link: "#" },
];

export default function TeamSection() {
  const t = useT();

  return (
    <section
      className="bg-gray-50 py-16 md:py-32 dark:bg-transparent"
      id="team"
    >
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          {t.team.label}
        </span>
        <ScrollView>
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <div className="sm:w-2/5">
              <h2 className="text-3xl font-bold sm:text-4xl">{t.team.heading}</h2>
            </div>
            <div className="mt-6 sm:mt-0">
              <p>{t.team.subheading}</p>
            </div>
          </div>
        </ScrollView>
        <div className="mt-12 md:mt-24">
          <ScrollView stagger delay={0.02}>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {t.team.members.map((member, index) => (
                <div key={index} className="group overflow-hidden">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0.01px)",
                      },
                    }}
                  >
                    <div className="relative h-96 w-full overflow-hidden rounded-md transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl">
                      <Image
                        src={memberAvatars[index].avatar}
                        alt={member.name}
                        fill
                        className="object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                      <div className="flex justify-between">
                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                          {member.name}
                        </h3>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {member.role}
                        </span>
                        <Link
                          href={memberAvatars[index].link}
                          className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          {t.team.linkedinLabel}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
}
