import React from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "./spinner";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  isLoading?: boolean;
}

export const Button: React.FC<Props> = (props) => {
  const content = (
    <>
      {props.text && (
        <p className="font-nunito text-lg font-bold text-neutral">
          {props.text}
        </p>
      )}
      {props.children}
    </>
  );

  return (
    <button
      {...props}
      className={twMerge(
        "btn btn-primary disabled:bg-base-300 rounded-lg",
        props.className
      )}
    >
      {!props.isLoading && content}
      {props.isLoading && <Spinner></Spinner>}
    </button>
  );
};
