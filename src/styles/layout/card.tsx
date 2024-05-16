import React from "react";
import { twMerge } from "tailwind-merge";

export const Card: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-neutral shadow-card p-14 px-10 rounded-lg",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
