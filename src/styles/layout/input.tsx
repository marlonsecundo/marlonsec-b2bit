import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: React.ReactNode;
  containerClass?: string;
  error?: string;

  "aria-label": string;
}

export const Input: React.FC<Props> = ({ error, containerClass, ...props }) => {
  return (
    <div className={twMerge("flex flex-col rounded", containerClass)}>
      {props.label && <div className="mb-1">{props.label}</div>}

      <input
        {...props}
        className={twMerge(
          "input bg-base-100 p-3 font-nunito",
          props.className
        )}
      ></input>

      {error && (
        <div title={props["aria-label"] + "-label-error"} className="label">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      )}
    </div>
  );
};
