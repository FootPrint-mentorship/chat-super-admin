// components/Card.tsx
import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, value, bgColor }) => {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg shadow-md" style={{ backgroundColor: bgColor }}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;
