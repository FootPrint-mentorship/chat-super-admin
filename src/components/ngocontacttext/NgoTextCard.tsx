// components/FoundationCard.tsx
import React from "react";

interface FoundationCardProps {
  title: string;
  logo: string;
  about: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  createdDate: string;
}

const FoundationCard: React.FC<FoundationCardProps> = ({
  title,
  logo,
  about,
  phone,
  email,
  website,
  location,
  createdDate,
}) => {
  return (
    <div className=" p-6 rounded-lg  max-w-md">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt={`${title} logo`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>

      {/* About Section */}
      <div className="mt-4  pt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-2">About</h3>
        <p className="text-sm text-gray-700 leading-7">{about}</p>
      </div>

      {/* Contact Section */}
      <div className="mt-4  pt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Contact</h3>
        <p className="text-sm text-gray-700 gap-10 mt-4">
          <strong>Phone:</strong> <span className="ml-40">{phone}</span>
        </p>
        <p className="text-sm text-gray-700 mt-4">
          <strong>Email:</strong> <span className="ml-40">{email}</span>
        </p>
        <p className="text-sm text-gray-700 mt-4">
          <strong>Website:</strong>
          <span className="ml-36">
            <a href={website} className="text-blue-500 hover:underline">
              {website}
            </a>
          </span>
        </p>
      </div>

      {/* Additional Details Section */}
      <div className="mt-4  pt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <p className="text-sm text-gray-700">
          <strong>Location:</strong> <span className="ml-36"></span>
          {location}
        </p>
        <p className="text-sm text-gray-700 mt-4">
          <strong>Created:</strong> <span className="ml-36"></span>
          {createdDate}
        </p>
      </div>
    </div>
  );
};

export default FoundationCard;
