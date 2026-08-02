"use client";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { useT } from "@/i18n";
import Image from "next/image";

const companies = [
  { src: "/images/company/company1.png", alt: "Company 1" },
  { src: "/images/company/company2.png", alt: "Company 2" },
  { src: "/images/company/company3.png", alt: "Company 3" },
  { src: "/images/company/company4.png", alt: "Company 4" },
  { src: "/images/company/company5.png", alt: "Company 5" },
];

export default function LogoCloud() {
  const t = useT();

  return (
    <section className="overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm hidden xl:block">
              {t.nav.home === "Beranda" ? "Dipercaya tim terbaik" : "Powering the best teams"}
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={100}>
              {companies.map((company) => (
                <div key={company.src} className="flex items-center">
                  <Image
                    src={company.src}
                    alt={company.alt}
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain invert dark:invert-0"
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
