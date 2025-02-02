import React, { useState, FormEvent } from "react";

// Define AddBeneficiariesProps interface
interface AddBeneficiariesProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  countryCode?: string;
}

const AddBeneficiaries: React.FC<{ onClose: () => void }> = ({ 
    onClose,
}) => {
  const [formData, setFormData] = useState<AddBeneficiariesProps>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
  });

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [listFilter, setListFilter] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose(); // Close the modal after form submission
  };

  const customCountries = [
    { code: "us", name: "United States", dialCode: "+1", flag: "🇺🇸" },
    { code: "ng", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
    { code: "gh", name: "Ghana", dialCode: "+233", flag: "🇬🇭" },
  ];

//   const handleCountryChange = (code: string) => {
//     const country = customCountries.find((c) => c.code === code);
//     if (country) {
//       setSelectedCountry(country);
//       setFormData((prevData) => ({
//         ...prevData,
//         countryCode: country.dialCode,
//       }));
//     }
//   };

  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-[698px] h-[410px] rounded-2xl bg-white p-12 shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Add Beneficiary</h2>
          <button
           
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
          x
          </button>
        </div>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 w-full h-[50px] rounded-lg shadow-sm bg-[#f5f6f8]"
                placeholder="John"
                value={formData.firstName || ""}
                onChange={handleChange}
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 w-full h-[50px] rounded-lg shadow-sm bg-[#f5f6f8]"
                placeholder="Doe"
                value={formData.lastName || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full h-[50px] rounded-lg shadow-sm bg-[#f5f6f8]"
                placeholder="example@gmail.com"
                value={formData.email || ""}
                onChange={handleChange}
              />
            </div>

            {/* Phone Number */}
            <div className="mt-6">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex">
                <select
                  id="countryCode"
                  name="countryCode"
                  className="block w-16 mt-1 h-[50px] rounded-l-lg bg-[#f5f6f8] shadow-sm"
                  value={formData.countryCode || ""}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setListFilter(e.target.value)}
                >
                  <option value="+1">+1</option>
                  <option value="+234">+234</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full mt-1 h-[50px] rounded-md shadow-sm bg-[#f5f6f8]"
                  placeholder="(759) 012-3985"
                  value={formData.phoneNumber || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-start">
            <button
              type="submit"
              className="rounded-lg bg-[#17CE89] px-6 py-2 text-white font-medium"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBeneficiaries;
