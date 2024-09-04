import React from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export interface ButtonPropsInharitence extends ButtonProps {
  additionalClasses?: string;
}

const baseClasses = "px-4 py-2 rounded-md font-semibold text-white focus:outline-none";

export const Button: React.FC<ButtonPropsInharitence> = ({ onClick, label, disabled, className, additionalClasses = "" }) => {
  const combinedClasses = `${className || ""} ${baseClasses} ${additionalClasses}`.trim();

  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
