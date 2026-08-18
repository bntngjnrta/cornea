"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";
import { ScrollView } from "@/components/motion/scroll-view";
import { useT } from "@/i18n";

export default function FooterSection() {
  const t = useT();

  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollView viewMargin="0px 0px -20px 0px">
          <Link
            href="/"
            aria-label="go home"
            className="mx-auto flex flex-col items-center gap-3 w-fit"
          >
            <Logo className="size-12 text-foreground" />
            <span className="font-bold tracking-tight">{t.footer.tagline}</span>
          </Link>
        </ScrollView>
        <ScrollView delay={0.2} viewMargin="0px 0px -20px 0px">
          <span className="text-muted-foreground block text-center text-sm mt-3">
            © {new Date().getFullYear()} {t.footer.copyright}
          </span>
        </ScrollView>
      </div>
    </footer>
  );
}
