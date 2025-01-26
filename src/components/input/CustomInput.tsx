"use client";

import React from "react";
import { GrNext } from "react-icons/gr";

interface CustomInputProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, icon, onClick }) => {
  return (
    <button
      className="flex items-center justify-between bg-white rounded-lg shadow-lg p-4 w-full hover:shadow-xl transition-all"
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        <span className="text-xl">{icon}</span>
        <span className="text-gray-600 font-medium">{label}</span>
      </div>
      <span className="text-gray-500">
        <GrNext />
      </span>
    </button>
  );
};

export default CustomInput;
