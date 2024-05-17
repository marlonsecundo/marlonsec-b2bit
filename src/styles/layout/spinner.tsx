import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  size?: "base" | "sm" | "md" | "lg";
}

export const Spinner: React.FC<Props> = (props) => {
  const getSize = (size?: string) => {
    switch (size) {
      case "base":
        return "h-5 w-5";
      case "sm":
        return "h-4 w-4";
      case "md":
        return "h-6 w-6";
      case "lg":
        return "h-8 w-8";
      default:
        return "h-5 w-5";
    }
  };

  return (
    <svg
      className={twMerge(
        "animate-spin h-5 w-5 mr-3 fill-neutral",
        getSize(props.size),
        props.className
      )}
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m10 3.5c-3.58985 0-6.5 2.91015-6.5 6.5 0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75c3.5899 0 6.5-2.9101 6.5-6.5 0-3.58985-2.9101-6.5-6.5-6.5z"></path>
    </svg>
  );
};
