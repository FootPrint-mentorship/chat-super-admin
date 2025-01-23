import React, { useState } from 'react';
import classNames from 'classnames';

type Option = {
    value: string | number;
    label: string;
    icon?: React.ReactNode;
};

type SelectProps = {
    options: Option[];
    value?: string | number;
    placeholder?: string;
    variant?: 'outlined' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    fullWidth?: boolean;
    onChange?: (value: string | number) => void;
    className?: string;
    border?: string
};

const Select: React.FC<SelectProps> = ({
                                           options,
                                           value,
                                           placeholder = 'Today',
                                           variant = 'outlined',
                                           size = 'sm',
                                           disabled = false,
                                           fullWidth = false,
                                           onChange,
                                           className = '',
                                           border
                                       }) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find((option) => option.value === value);

    const toggleDropdown = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const handleOptionSelect = (optionValue: string | number) => {
        onChange?.(optionValue);
        setIsOpen(false);
    };

    const sizeClasses = {
        sm: 'text-sm py-2 px-2',
        md: 'text-base py-2 px-4',
        lg: 'text-lg py-3 px-5',
    };

    const variantClasses = {
        outlined: `${border ? border : "border"} border-primaryTextColor bg-white focus:ring-2 focus:ring-blue-500`,
        filled: 'bg-gray-100 border border-transparent focus:ring-2 focus:ring-blue-500',
    };

    const containerClasses = classNames(
        'relative rounded inline-block',
        fullWidth && 'w-full',
        className
    );

    const buttonClasses = classNames(
        'w-full flex justify-between items-center gap-4 text-left rounded focus:outline-none transition ease-in-out',
        sizeClasses[size],
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed'
    );

    const dropdownClasses = classNames(
        'absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg',
        sizeClasses[size]
    );

    const optionClasses = (isSelected: boolean) =>
        classNames(
            'cursor-pointer px-2 py-2 flex items-center gap-2 hover:bg-gray-100',
            isSelected && 'bg-blue-100'
        );

    return (
        <div className={containerClasses}>
            <button type="button" className={buttonClasses} onClick={toggleDropdown} disabled={disabled}>
                {selectedOption?.icon && <span className="mr-2">{selectedOption.icon}</span>}
                {selectedOption?.label || placeholder}
                <svg fill="none" height="15" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z"
                        fill="#707FA3"/>
                </svg>
            </button>

            {isOpen && (
                <ul className={dropdownClasses}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={optionClasses(option.value === value)}
                            onClick={() => handleOptionSelect(option.value)}
                        >
                            {option.icon && <span>{option.icon}</span>}
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
