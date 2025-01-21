// pages/index.tsx
import React from "react";
import Card from "../card/NgoPaymentCard";
// import {
//   CurrencyDollarIcon,
//   CreditCardIcon,
//   UsersIcon,
//   ShoppingBagIcon,
// } from "@heroicons/react/outline";
import { FaSackDollar } from "react-icons/fa6";

const NgoPayments: React.FC = () => {
  const data = [
    {
      title: "Received",
      value: "$32,842,000",
      //   icon: <CurrencyDollarIcon className="w-6 h-6" />,
      icon: <FaSackDollar className="w-6 h-6" />,

      percentage: "2.5%",
      bgColor: "bg-green-500",
    },
    {
      title: "Disbursed",
      value: "$24,842,000",
      //   icon: <CreditCardIcon className="w-6 h-6" />,
      icon: <FaSackDollar className="w-6 h-6" />,
      percentage: "2.5%",
      bgColor: "bg-red-500",
    },
    {
      title: "Beneficiaries",
      value: "82,000",
      //   icon: <UsersIcon className="w-6 h-6" />,
      icon: <FaSackDollar className="w-6 h-6" />,
      percentage: "2.5%",
      bgColor: "bg-purple-500",
    },
    {
      title: "Vendors",
      value: "2,000",
      //   icon: <ShoppingBagIcon className="w-6 h-6" />,
      icon: <FaSackDollar className="w-6 h-6" />,
      percentage: "2.5%",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-center  p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            percentage={item.percentage}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default NgoPayments;
