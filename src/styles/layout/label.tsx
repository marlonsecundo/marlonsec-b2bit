import React from "react";
import { twMerge } from "tailwind-merge";

export const Label: React.FC<
  React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
> = (props) => {
  return (
    <label
      {...props}
      className={twMerge(
        "text-neutral-content font-nunito font-bold text-lg",
        props.className
      )}
    >
      {props.children}
    </label>
  );
};
