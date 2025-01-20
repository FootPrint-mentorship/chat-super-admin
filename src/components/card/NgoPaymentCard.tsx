import React from "react";
import { IoMdArrowUp } from "react-icons/io";

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  percentage: string;
  bgColor: string;
}

const NgoPaymentCard: React.FC<CardProps> = ({
  title,
  value,
  icon,
  percentage,
  bgColor,
}) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div
        className={`p-3 text-white rounded-full ${bgColor} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
        <p className="text-sm text-green-500 flex items-center">
          <span className="mr-1">
            <IoMdArrowUp />
          </span>
          {percentage}
        </p>
      </div>
    </div>
  );
};

export default NgoPaymentCard;
