import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useController() {
  const { i18n } = useTranslation();

  const onChangeInput = (checked: boolean) => {
    i18n.changeLanguage(checked ? "pt" : "en");
  };

  const checked = i18n.language === "pt";

  useEffect(() => {
    localStorage.setItem("lang", i18n.language);
  }, [i18n.language]);

  return {
    onChangeInput,
    checked,
  };
}
