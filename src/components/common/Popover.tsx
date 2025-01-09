import React from 'react';

type PopoverProps = {
    actions: string[];
    onActionClick: (action: string) => void;
};

const Popover: React.FC<PopoverProps> = ({ actions, onActionClick }) => {
    return (
        <div className="absolute bg-white flex flex-col gap-2 shadow-lg rounded-md w-48 border border-gray-200 mt-2">
            {actions.map((action, index) => (
                <div
                    key={index}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => onActionClick(action)}
                >
                    {action}
                </div>
            ))}
        </div>
    );
};

export default Popover;
