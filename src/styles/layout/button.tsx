import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className={twMerge("btn btn-primary rounded-lg", props.className)}
    >
      {props.text && (
        <p className="font-nunito text-lg font-bold text-neutral">
          {props.text}
        </p>
      )}
      {props.children}
    </button>
  );
};
