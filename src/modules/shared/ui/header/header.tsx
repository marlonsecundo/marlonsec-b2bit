import React from "react";
import { Button } from "styles/layout";
import { useController } from "./controller";

export const Header: React.FC = () => {
  const controller = useController();

  return (
    <div className="absolute bg-neutral p-5 w-full flex justify-end">
      <Button
        className="md:px-32"
        onClick={() => controller.handleLogoutClick()}
        text="Logout"
      ></Button>
    </div>
  );
};
