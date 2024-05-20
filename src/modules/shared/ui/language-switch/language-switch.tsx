import React from "react";
import { useController } from "./controller";

export const LanguageSwitch: React.FC = () => {
  const { checked, onChangeInput } = useController();

  return (
    <label className="swap">
      <input
        type="checkbox"
        checked={checked}
        value={String(checked)}
        onChange={(e) => onChangeInput(e.target.checked)}
      />
      <div className="font-nunito font-bold swap-on">PT</div>
      <div className="font-nunito font-bold swap-off">EN</div>
    </label>
  );
};
