import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, className }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0  h-screen w-screen overflow-y-scroll  z-[3000]  bg-black bg-opacity-50 ${className}`}
      onClick={onClose}
    >
      <div
        className="bg-white  p-6 max-w-sm md:max-w-md lg:max-w-lg lg:w-full min-h-[150px] rounded-lg   relative mx-auto"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
