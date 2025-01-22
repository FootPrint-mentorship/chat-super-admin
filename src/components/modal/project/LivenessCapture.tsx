import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  nationalId: string;
  phoneNumber: string;
  address: string;
}

interface LivenessCaptureProps {
  onClose: () => void;
}

const LivenessCapture: React.FC<LivenessCaptureProps> = ({ onClose }) => {
  const [image, setImage] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    nationalId: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative flex bg-white rounded-lg shadow-lg w-[645px] h-[608px] gap-[32px] p-[40px] font-sans text-gray-800">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          X
        </button>
        
        <div className="mr-4px text-center">
            
          {image ? (
            <img
              src={image}
              alt="Liveness capture"
              className="w-36 h-36 rounded-lg object-cover"
            />
          ) : (
            <div className="w-[196px]  h-[205px] gap-[10px] ml-[40px]  bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">No Image</span>
            </div>
          )}
          <p className="mt-2 text-center text-[20px] font-bold leading-[24.76px] tracking-[0.01em]  decoration-gray-800">
            Liveness capture
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 text-sm"
          />
        </div>
        <div className="flex-1 space-y-4 w-[337px]">
          <div>
            <label className="block text-sm text-gray-600 mb-1">First Name</label>
            <input
              className="w-full h-[52px] p-2 text-sm border border-gray-300 rounded-md bg-gray-100"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Last Name</label>
            <input
              className="w-full h-[52px] p-2 text-sm border border-gray-300 rounded-md bg-gray-100"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              National Identification Number
            </label>
            <input
              className="w-full h-[52px] p-2 text-sm border border-gray-300 rounded-md bg-gray-100"
              type="text"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              className="w-full h-[52px] p-2 text-sm border border-gray-300 rounded-md bg-gray-100"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Address</label>
            <input
              className="w-full h-[52px] p-2 text-sm border border-gray-300 rounded-md bg-gray-100 mb-4"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between ">
            <button className="bg-green-500 text-white px-10 py-2 rounded-md hover:bg-green-600">
              Approve
            </button>
            <button className="bg-red-500 text-white px-10 py-2 rounded-md hover:bg-red-600">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivenessCapture;
