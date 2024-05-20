import Joi from "joi";
import enJSON from "@/assets/translations/en.json";
import ptJSON from "@/assets/translations/pt.json";
import i18next from "i18next";
export const defaultJoiOptions = (): Joi.AsyncValidationOptions => {
  return {
    errors: {
      language: i18next.language,
    },
    messages: {
      pt: ptJSON.joi,
      en: enJSON.joi,
    },
  };
};
