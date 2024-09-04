"use client";

import { BasicButton, TooltipButton, TooltipButtonProps } from "@/theme/(version2)/buttons/BasicButton";
import { useState } from "react";
import { InputModal } from "./compoments/InputModal";

export default function ButtonFactoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="page-content h-full overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Button Page</h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        <BasicButton label="Basic Button" onClick={handleClick} className="w-full h-10" />
        <BasicButton label="Basic Button" onClick={handleClick} className="w-full h-10" />
        <TooltipButton label="Basic Button" onClick={handleClick} className="w-full h-10" tooltip="Tooltip" />
      </div>
      {isModalOpen && (
        <InputModal onClose={() => setIsModalOpen(false)}>
          <p>You clicked the Basic Button!</p>
        </InputModal>
      )}
    </div>
  );
}
