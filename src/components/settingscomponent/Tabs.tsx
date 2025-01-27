"use client";

import React, { useState } from "react";

export interface TabsProps {
  tabs: string[];
  onTabChange: (selectedTab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex space-x-8  border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`pb-3 text-base font-medium tracking-normal ${
            activeTab === tab
              ? "text-green-500 border-b-4 text-lg font-semibold border-green-500"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
