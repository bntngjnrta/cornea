"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 w-14 cursor-pointer font-medium text-xs tracking-wide"
      onClick={() => setLang(lang === "en" ? "id" : "en")}
      aria-label={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
    >
      {lang === "en" ? "ID" : "EN"}
    </Button>
  );
}
