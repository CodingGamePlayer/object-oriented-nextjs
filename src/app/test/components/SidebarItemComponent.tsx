"use client";

import { SidebarItem } from "@/theme/abstracts/AbstractSidebarItem";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SidebarItemProps {
  item: SidebarItem;
}

export default function SidebarItemComponent({ item }: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={handleToggle}
        className="cursor-pointer flex items-center justify-between"
      >
        {item.render()}
        {item.children && (
          <span className="transition-transform duration-700 ease-in-out mt-4">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        )}
      </div>
      {item.children && (
        <div
          className={`ml-4 overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {item.children.map((child, index) => (
            <SidebarItemComponent key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}
