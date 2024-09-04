import { Input } from "@/components/ui/input";
import { BasicButton } from "@/theme/(version2)/buttons/BasicButton";
import { Card } from "@/theme/abstracts/function-type/Card";
import React from "react";

interface InputModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const InputModal: React.FC<InputModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card title="InputModal" content="InputModal">
        {children}
        <Input />
        <BasicButton label="Close" onClick={onClose} />
      </Card>
    </div>
  );
};
