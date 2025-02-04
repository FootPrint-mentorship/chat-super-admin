import React, { ReactNode, useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import { Authenticated } from "@/lib/auth/withAuth";

function ActivityLogs() {
  const activityLogs = [
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Funded 'Clean Water Initiative'",
      amount: "$2,000",
      status: "Successful",
      remarks: "Payment processed via...",
    },
    {
      date: "2024-05-14",
      user: "Jane Smith",
      activityType: "Disbursement",
      description: "Disbursed funds to beneficiary...",
      amount: "$500",
      status: "Pending",
      remarks: "Awaiting beneficiary co...",
    },
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Attempted to fund 'Educatio..'",
      amount: "$1,500",
      status: "Failed",
      remarks: "Insufficient wallet balance",
    },
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Funded 'Clean Water Initiative'",
      amount: "$2,000",
      status: "Successful",
      remarks: "Payment processed via...",
    },
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Funded 'Clean Water Initiative'",
      amount: "$2,000",
      status: "Successful",
      remarks: "Payment processed via...",
    },
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Funded 'Clean Water Initiative'",
      amount: "$2,000",
      status: "Successful",
      remarks: "Payment processed via...",
    },
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Funded 'Clean Water Initiative'",
      amount: "$2,000",
      status: "Successful",
      remarks: "Payment processed via...",
    },
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Funded 'Clean Water Initiative'",
      amount: "$2,000",
      status: "Successful",
      remarks: "Payment processed via...",
    },
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Funded 'Clean Water Initiative'",
      amount: "$2,000",
      status: "Successful",
      remarks: "Payment processed via...",
    },
    {
      date: "2024-05-15",
      user: "Jane Smith",
      activityType: "Project Funding",
      description: "Funded 'Clean Water Initiative'",
      amount: "$2,000",
      status: "Successful",
      remarks: "Payment processed via...",
    },
  ];

  return (
    <DashboardLayout title="Activity logs" header="Activity logs">
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium">Activity Log</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Filter By Date
            </button>
            <button className="px-4 py-2 bg-[#00A85A] text-white rounded-lg text-sm">
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="text-left py-3 px-6 font-medium w-[120px]">Date</th>
                <th className="text-left py-3 px-6 font-medium w-[120px]">User</th>
                <th className="text-left py-3 px-6 font-medium w-[140px]">Activity Type</th>
                <th className="text-left py-3 px-6 font-medium w-[200px]">Description</th>
                <th className="text-left py-3 px-6 font-medium w-[100px]">Amount</th>
                <th className="text-left py-3 px-6 font-medium w-[120px]">Status</th>
                <th className="text-left py-3 px-6 font-medium w-[200px]">Remarks</th>
                <th className="text-left py-3 px-6 w-[50px]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activityLogs.map((log, index) => (
                <tr key={index} className="text-sm hover:bg-gray-50">
                  <td className="py-3 px-6">{log.date}</td>
                  <td className="py-3 px-6">{log.user}</td>
                  <td className="py-3 px-6">{log.activityType}</td>
                  <td className="py-3 px-6 break-words">{log.description}</td>
                  <td className="py-3 px-6">{log.amount}</td>
                  <td className="py-3 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      log.status === "Successful" ? "bg-[#E1F7E3] text-[#00A85A]" :
                      log.status === "Pending" ? "bg-[#FFF5E6] text-[#F59E0B]" :
                      "bg-[#FFE2E5] text-[#F64E60]"
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-gray-500 break-words">{log.remarks}</td>
                  <td className="py-3 px-6">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="flex justify-end items-center px-6 py-4 bg-gray-50 border-t gap-4">
            <span className="text-sm text-gray-500">Showing 1 - 10 of 24</span>
            <div className="flex gap-1">
              <button className="p-1 rounded text-gray-500 hover:bg-gray-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-1 rounded text-gray-500 hover:bg-gray-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

ActivityLogs.getLayout = (page: ReactNode) => {
  return <Authenticated>{page}</Authenticated>;
};

export default ActivityLogs;
