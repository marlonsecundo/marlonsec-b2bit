import enJSON from "@/assets/translations/en.json";
import ptJSON from "@/assets/translations/pt.json";

import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      pt: typeof ptJSON;
      en: typeof enJSON;
    };
  }
}
