import React from 'react';
import { useNavigate } from 'react-router-dom';
// import DonorsLayout from './DonorsLayout';

const WithdrawalActionModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const handleOpenModal = () => {
      setModalOpen(true);
    //   window.location.href = '/donors';// Optionally open a modal if needed
    };

    const handleCloseModal = () => {
        setModalOpen(false);
      };
    
    return (
    <>
    <div className="relative top-[-112px] flex justify-end items-center  z-50 ">
            <div className=" bg-white  rounded-lg shadow-lg  ">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-0.5 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                    ✕
                </button>

                <ul className="text-lg text-gray-600   ">
                    {/* View Button */}
                    <li className="text-sm text-gray-600 cursor-pointer" onClick={handleOpenModal}>View</li>
                    <li className="text-sm text-gray-600 cursor-pointer">Approve</li>
                    <li className="text-sm text-gray-600 cursor-pointer">Delete</li>
                </ul>
            </div>
        </div>
    </>
    );
};

export default WithdrawalActionModal;
