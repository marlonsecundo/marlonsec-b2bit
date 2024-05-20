import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enJSON from "@/assets/translations/en.json";
import ptJSON from "@/assets/translations/pt.json";

export function initI18n() {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init<typeof enJSON>({
      supportedLngs: ["pt", "en"],
      resources: {
        en: {
          translation: enJSON,
        },
        pt: {
          translation: ptJSON,
        },
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
}
