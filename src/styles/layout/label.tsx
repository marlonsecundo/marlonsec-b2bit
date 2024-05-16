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
      className={twMerge("text-primary-content", props.className)}
    >
      {props.children}
    </label>
  );
};
