import enJSON from "@/assets/translations/en.json";
import ptJSON from "@/assets/translations/pt.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: enJSON,
    },
    pt: {
      translation: ptJSON,
    },
  },
});
export default i18n;
