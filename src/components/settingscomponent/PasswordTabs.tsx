"use client";

import React, { useState } from "react";

export interface TabsProps {
  tabs: string[];
  onTabChange?: (activeTab: string) => void;
}

const PasswordTabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="flex bg-gray-100 rounded-md p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`flex-1 text-sm font-medium py-3  rounded-md transition-all ${
            activeTab === tab
              ? "bg-slate-400 text-white shadow pl-7 pr-7"
              : "bg-gray-100 text-gray-500 hover:text-gray-700 "
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PasswordTabs;
