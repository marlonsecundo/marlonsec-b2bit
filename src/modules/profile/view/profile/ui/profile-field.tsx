import React from "react";

interface Props {
  label: string;
  value: string;
}

export const ProfileField: React.FC<Props> = ({ label, value }) => {
  return (
    <div>
      <p className="mb-1">
        Your <span className="font-bold font-nunito">{label}</span>
      </p>
      <p className="p-3 bg-base-100 rounded-md font-nunito">{value}</p>
    </div>
  );
};
