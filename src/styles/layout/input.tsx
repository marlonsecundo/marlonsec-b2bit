import React from "react";
import { twMerge } from "tailwind-merge";
import { Label } from "./label";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: React.ReactNode;
  containerClass?: string;
  error?: string;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <div className={twMerge("flex flex-col rounded", props.containerClass)}>
      {props.label && <div className="mb-1">{props.label}</div>}

      <input
        {...props}
        className={twMerge("input bg-base-100 p-3 text-sm", props.className)}
      ></input>

      {props.error && (
        <div className="label">
          <span className="label-text-alt text-error">{props.error}</span>
        </div>
      )}
    </div>
  );
};
