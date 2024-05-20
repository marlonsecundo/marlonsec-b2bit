import React from "react";
import { Button } from "@/styles/layout";
import { useController } from "./controller";
import { ThemeSwitch } from "../theme-switch/theme-switch";
import { LanguageSwitch } from "../language-switch/language-switch";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const controller = useController();

  const { t } = useTranslation();

  const { isAuthenticated } = controller;

  return (
    <div className="absolute bg-neutral p-5 w-full flex justify-end items-center top-0 max-h-16">
      <div className="flex flex-1 flex-row">
        <ThemeSwitch></ThemeSwitch>

        <div className="ml-5"></div>

        <LanguageSwitch></LanguageSwitch>
      </div>

      {isAuthenticated && (
        <Button
          aria-label="logout-button"
          className="md:px-32"
          onClick={() => controller.handleLogoutClick()}
          text={t("auth.logout")}
        ></Button>
      )}
    </div>
  );
};
