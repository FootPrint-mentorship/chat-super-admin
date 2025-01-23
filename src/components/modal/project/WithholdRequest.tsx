import React from "react";

const WithholdRequest: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const handleOpenModal = () => {
      setModalOpen(true);
    //   window.location.href = '/donors';// Optionally open a modal if needed
    };

    const handleCloseModal = () => {
        setModalOpen(false);
      };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 ">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg h-[596px] ">


        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 p-4">
          <h2 className="text-xl font-semibold text-gray-800">Withhold request</h2>
            {/* <button
                    onClick={onClose}
                    className="absolute top-0.5 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                    X
                </button> */}
                <button
                
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600" >&times;</button>
        </div>

        {/* Content */}
        <div className="p-4  ">
          {/* Campaign Details */}
          <div className="mb-8 space-y-2 bg-[#FCFCFE] h-152px w-420px gap-0 p-4  rounded-md  border-10px  ">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500 ml-20px ml-6">Campaign Name</p>
              <p className="font-medium text-gray-700 mr-12">War Against Covid</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500 ml-6">Amount Donated</p>
              <p className="font-medium text-gray-700 mr-12">USDT 5,000</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500 ml-6">Total Beneficiaries</p>
              <p className="font-medium text-gray-700 mr-12">284</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500 ml-6">Donation Date</p>
              <p className="font-medium text-gray-700 mr-12">Aug 03, 2022</p>
            </div>
          </div>

          {/* Reason */}
          <div className="mb-12 h-85px ">
            <p className="mb-1 text-sm font-medium text-gray-600">Reason</p>
            <textarea
              className="w-full bg-[#F5F6F8] rounded-lg border border-gray-300 p-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows={4}
              defaultValue="Lorem ipsum dolor sit amet consectetur. Massa malesuada vitae fames amet morbi est pulvinar id. Eget proin commodo phasellus feugiat proin lacus pretium in."
              readOnly
            ></textarea>
          </div>

          {/* Confirm Button */}
          <div className="">

          <button className="w-full h-[50px] rounded-lg bg-green-500 py-2 text-sm font-medium text-white hover:bg-green-600 mb-3 ">
            Confirm withdrawal approval
          </button>
          <button className="w-full h-[50px] mb-14  rounded-lg bg-[#FFFFFF] border border-[#17CE89] py-2 text-sm font-medium hover:bg-green-600 text-green-500">
  Cancel
</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WithholdRequest;
