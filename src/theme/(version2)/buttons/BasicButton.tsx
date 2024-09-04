import { Button, ButtonPropsInharitence } from "@/theme/abstracts/function-type/Button";
import React, { useRef, useState } from "react";

export const BasicButton: React.FC<ButtonPropsInharitence> = (props) => (
  <Button {...props} additionalClasses={`bg-blue-500 hover:bg-blue-700 ${props.additionalClasses || ""}`} />
);

export interface TooltipButtonProps extends ButtonPropsInharitence {
  tooltip?: string;
}

export const TooltipButton: React.FC<TooltipButtonProps> = ({ tooltip, ...props }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative inline-block" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} ref={buttonRef}>
      <BasicButton {...props} />
      {showTooltip && (
        <div
          className="absolute z-10 p-2 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap"
          style={{
            top: buttonRef.current ? `-${buttonRef.current.offsetHeight}px` : "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};
