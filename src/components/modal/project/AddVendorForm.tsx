import React, { useState } from "react";

interface AddVendorFormData {
  countryCode: string | number | readonly string[] | undefined;
  name: string;
  email: string;
  store: string;
  location: string;
  phoneNumber: string;
}

interface AddVendorFormProps {
  onClose: () => void;
}

const AddVendorForm: React.FC<AddVendorFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<AddVendorFormData>({
    countryCode: "",
    name: "",
    email: "",
    store: "",
    location: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white shadow-md rounded-lg p-8  h-[530px] w-[688px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-[#293F68]">Add Vendor</h2>
        <form
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            First Name
            </label>
            <input
              type="text"
              id="First Name"
              name="name"
              className="mt-1 block w-[300px] h-[50px] rounded-md bg-[#F5F6F8] shadow-sm sm:text-sm"
              value={formData.name}
              onChange={handleChange}
              placeholder=" name"
            />
          </div>

<div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
            Last Name
            </label>
            <input
              type="text"
              id="First Name"
              name="name"
              className="mt-1 block w-[300px] h-[50px] rounded-md bg-[#F5F6F8] shadow-sm sm:text-sm"
              value={formData.name}
              onChange={handleChange}
              placeholder=" name"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md h-[50px] border-gray-300 shadow-sm bg-[#F5F6F8] sm:text-sm"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="store" className="block text-sm font-medium text-gray-700">
              Store
            </label>
            <input
              type="text"
              id="store"
              name="store"
               className="mt-1 block w-[300px] h-[50px] rounded-md bg-[#F5F6F8] shadow-sm sm:text-sm"
              value={formData.store}
              onChange={handleChange}
              placeholder="Store Name"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Store Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
             className="mt-1 block w-[300px] h-[50px] rounded-md bg-[#F5F6F8] shadow-sm sm:text-sm"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State"
            />
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 block w-full rounded-md h-[50px] border-gray-300 shadow-sm bg-[#F5F6F8] sm:text-sm"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>

          {/* Save Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-[113px] bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVendorForm;
