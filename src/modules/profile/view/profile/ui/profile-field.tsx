import React from "react";

interface Props {
  label: string;
  value: string;
  isLoading: boolean;
  "aria-label"?: string;
}

export const ProfileField: React.FC<Props> = ({
  label,
  value,
  isLoading,
  ...props
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col">
        <div className="skeleton h-8 w-24 rounded mb-1"></div>
        <div className="skeleton h-10 rounded w-full"></div>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-1">
        Your <span className="font-bold font-nunito">{label}</span>
      </p>
      <p
        aria-label={`${props["aria-label"]}-value`}
        className="p-3 bg-base-100 rounded-md font-nunito"
      >
        {value}
      </p>
    </div>
  );
};
