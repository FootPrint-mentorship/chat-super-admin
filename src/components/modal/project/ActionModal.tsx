import React from 'react';
import { useNavigate } from 'react-router-dom';
// import DonorsLayout from './DonorsLayout';

const ActionModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const handleOpenModal = () => {
      setModalOpen(true);
      window.location.href = '/donors';// Optionally open a modal if needed
    };

    const handleCloseModal = () => {
        setModalOpen(false);
      };
    
    return (
    <><div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-64">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                    ✕
                </button>

                <ul className="text-lg text-gray-600">
                    {/* View Button */}
                    <li
                        className="py-2 text-gray-600 cursor-pointer"
                        onClick={handleOpenModal}
                    >
                        View
                    </li>
                    <li className="py-2 text-gray-600 cursor-pointer">Activate</li>
                    <li className="py-2 text-gray-600 cursor-pointer">Deactivate</li>
                </ul>
            </div>
        </div>
       
    </>
    );
};

export default ActionModal;
