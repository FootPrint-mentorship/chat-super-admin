import React, { useState } from "react";
// Removed the import for 'react-phone-input-2' due to the error
import PhoneInput from 'react-phone-input-2';


interface OrganizationFormData {
  countryCode: string | number | readonly string[] | undefined;
  name: string;
  email: string;
  website: string;
  location: string;
  phoneNumber: string;
}


const AddOrganizationForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<OrganizationFormData>({
    countryCode: "",
    name: "",
    email: "",
    website: "",
    location: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose(); // Close the modal after form submission
  };

  const [selectedCountry, setSelectedCountry] = useState({
    code: "us",
    name: "United States",
    dialCode: "+1",
    flag: "🇺🇸",
  });
  const [phoneNumber, setPhoneNumber] = useState("");

  // Custom country list
  const customCountries = [
    { code: "us", name: "United States", dialCode: "+1", flag: "🇺🇸" },
    { code: "ng", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
    { code: "gh", name: "Ghana", dialCode: "+233", flag: "🇬🇭" },
  ];

  const handleCountryChange = (code: string) => {
    const country = customCountries.find((c) => c.code === code);
    if (country) {
      setSelectedCountry(country);
    }
  };


  return (
    <div className="fixed  inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-md p-8 relative w-[480px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Add Organization
          </h2>

          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name of Organization
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter organization"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 bg-[#F5F6F8]  "
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none bg-[#F5F6F8]   "
          />

          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Website Address
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="https://www.example.com"
            value={formData.website}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none bg-[#F5F6F8]  "
          />

          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none bg-[#F5F6F8]   "
          />

          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700  mb-1"
          >
            Phone Number
          </label>
         
          <div className="flex items-center border border-gray-300 rounded-lg  mb-4  bg-[#F5F6F8]  ">
  
  <select
    className="p-2 bg-transparent text-gray-700 focus:ring-0 focus:outline-none border-r border-gray-300  "
    value={selectedCountry.code}
    onChange={(e) => handleCountryChange(e.target.value)}
  >
    {customCountries.map((country) => (
      <option key={country.code} value={country.code}>
        {country.flag} ({country.dialCode})
      </option>
    ))}
  </select>
  {/* Phone Input */}
  <input
    type="text"
    className="flex-grow p-2 text-gray-700 focus:outline-none bg-[#F5F6F8]  "
    placeholder="Enter phone number"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
</div>
          

          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded-lg p-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrganizationForm;
