import { en } from "./en";
import { id } from "./id";
import { useLanguage } from "@/context/language-context";

export const translations = { en, id };

export function useT() {
  const { lang } = useLanguage();
  return translations[lang];
}
