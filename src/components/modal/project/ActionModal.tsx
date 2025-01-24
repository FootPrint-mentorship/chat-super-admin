// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import DonorsLayout from './DonorsLayout';

// const ActionModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//     const [isModalOpen, setModalOpen] = React.useState(false);
//     const handleOpenModal = () => {
//       setModalOpen(true);
//     //   window.location.href = '/donors';// Optionally open a modal if needed
//     };

//     const handleCloseModal = () => {
//         setModalOpen(false);
//       };
    
//     return (
//     <>
//     <div className="relative inline-block text-left  z-50 ">
//             <div className=" bg-white  rounded-lg shadow-lg  ">
                
//                 <button
//                     onClick={onClose}
//                     className="absolute top-0.5 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
//                 >
//                     ✕
//                 </button>

//                 <ul className="text-lg text-gray-600   ">
                   
//                     <li
//                         className="text-sm text-gray-600 cursor-pointer" onClick={handleOpenModal} >View </li>
//                     <li className="text-sm text-gray-600 cursor-pointer">Activate</li>
//                     <li className="text-sm text-gray-600 cursor-pointer">Deactivate</li>
//                 </ul>
//             </div>
//         </div>
//     </>
//     );
// };

// export default ActionModal;



import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const ActionModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    window.location.href = '/donors'; // Optionally redirect
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    onClose(); // Trigger the parent-provided close function
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
        Options
        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-gray-400" aria-hidden="true" />
      </MenuButton>

      <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
            >
              View
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
            >
              Active
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
            >
              Deactivate
            </a>
          )}
        </MenuItem>
        <form method="POST" action="#">
          <MenuItem>
            {({ active }) => (
              <button
                type="submit"
                className={`block w-full px-4 py-2 text-left text-sm ${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                }`}
              >
                Sign out
              </button>
            )}
          </MenuItem>
        </form>
      </MenuItems>
    </Menu>
  );
};

export default ActionModal;

