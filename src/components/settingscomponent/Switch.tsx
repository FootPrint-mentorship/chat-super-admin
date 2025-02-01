import { useState } from "react";

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function Switch({ checked, onCheckedChange }: SwitchProps) {
  return (
    <button
      onClick={() => onCheckedChange(!checked)}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${
        checked ? "bg-green-500" : ""
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
          checked ? "translate-x-6" : ""
        }`}
      />
    </button>
  );
}
