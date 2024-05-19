import React from "react";
import { Button } from "@/styles/layout";
import { useController } from "./controller";
import { ThemeSwitch } from "../theme-switch/theme-switch";

export const Header: React.FC = () => {
  const controller = useController();

  const { isAuthenticated } = controller;

  return (
    <div className="absolute bg-neutral p-5 w-full flex justify-end top-0">
      <div className="flex flex-1 flex-row">
        <ThemeSwitch></ThemeSwitch>
      </div>

      {isAuthenticated && (
        <Button
          aria-label="logout-button"
          className="md:px-32"
          onClick={() => controller.handleLogoutClick()}
          text="Logout"
        ></Button>
      )}
    </div>
  );
};
