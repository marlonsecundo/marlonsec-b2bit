import React from "react";
import { twMerge } from "tailwind-merge";

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  return (
    <button {...props} className={twMerge("btn btn-primary", props.className)}>
      {props.children}
    </button>
  );
};
