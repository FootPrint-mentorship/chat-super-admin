// src/components/input/CustomInput.tsx
"use client";

import React from "react";
import { GrNext } from "react-icons/gr";

interface CustomInputProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  type?: string;
  name: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  icon,
  onClick,
  rightIcon,
  placeholder,
  type = "text",
  name,
}) => {
  return (
    <div className="relative">
      <button
        className="flex items-center justify-between bg-gray-100 rounded-lg  p-4 w-full hover:shadow-xl transition-all"
        onClick={onClick}
        type="button"
      >
        <div className="flex items-center space-x-2">
          <span className="text-xl text-gray-400">{icon}</span>
          <span className="text-gray-400 font-sm">{label}</span>
        </div>
        <span className="text-gray-400">{rightIcon}</span>
      </button>
    </div>
  );
};

export default CustomInput;
