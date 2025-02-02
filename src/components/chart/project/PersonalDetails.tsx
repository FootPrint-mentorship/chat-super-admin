import React from "react";

const PersonalDetailsCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl border border-gray-200 p-6">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4">
          <img
            src="/path/to/profile-picture.jpg"
            alt="Hakeem Mensah"
            className="rounded-full w-full h-full object-cover border-2 border-green-500"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Hakeem Mensah</h2>
        <p className="text-sm text-gray-500">ID: 00005</p>
        <div className="flex justify-center items-center gap-1 mt-1 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm font-medium">Verified</span>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="text-sm text-gray-600">
          <strong className="block text-gray-800">Phone number:</strong>
          +2348132205304
        </div>
        <div className="text-sm text-gray-600">
          <strong className="block text-gray-800">Location:</strong>
          Lagos, Nigeria
        </div>
        <div className="text-sm text-gray-600">
          <strong className="block text-gray-800">Email address:</strong>
          Karlkeller@gmail.com
        </div>
        <div className="text-sm text-gray-600">
          <strong className="block text-gray-800">Created:</strong>
          Saturday, 12 Dec, 2020
        </div>
        <div className="text-sm text-gray-600">
          <strong className="block text-gray-800">Status:</strong>
          Verified
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsCard;
