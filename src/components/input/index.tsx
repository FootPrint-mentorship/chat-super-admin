import React from 'react';
import classNames from 'classnames';

type InputProps = {
    value?: string |  number;
    placeholder?: string;
    type?: string; // Input type, e.g., text, email, password
    icon?: React.ReactNode; // Optional icon (left-side)
    endIcon?: React.ReactNode; // Optional icon (right-side)
    variant?: 'outlined' | 'filled'; // Appearance variants
    size?: 'sm' | 'md' | 'lg'; // Size variants
    disabled?: boolean; // Disabled state
    fullWidth?: boolean; // Full-width input
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
    className?: string; // Additional classNames
};

const Input = ({
                                         value = '',
                                         placeholder = 'Enter text',
                                         type = 'text',
                                         icon,
                                         endIcon,
                                         variant = 'outlined',
                                         size = 'md',
                                         disabled = false,
                                         fullWidth = false,
                                         onChange,
                                         className = '',
                                     }: InputProps) => {
    const sizeClasses = {
        sm: 'text-sm py-1.5 px-3',
        md: 'text-base py-2.5 px-4',
        lg: 'text-lg py-3 px-5',
    };

    const variantClasses = {
        outlined: 'border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500',
        filled: 'bg-gray-100 border border-transparent focus:ring-2 focus:ring-blue-500',
    };

    const containerClasses = classNames(
        'relative flex items-center rounded transition ease-in-out',
        sizeClasses[size],
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        fullWidth && 'w-full',
        className
    );

    const inputClasses = classNames([
        "w-full focus:outline-none bg-transparent",
        icon && "pl-10", // Add `pl-10` if `icon` is true
        endIcon && "pr-10" // Add `pr-10` if `endIcon` is true
    ].filter(Boolean));

    const iconClasses = 'absolute inset-y-0 flex items-center pointer-events-none';


    return (
        <div className={containerClasses}>
            {icon && <span className={classNames(iconClasses, 'left-6')}>{icon}</span>}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                className={classNames(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    inputClasses,
                    icon && 'pl-10', // Add padding if icon is present
                    endIcon && 'pr-10' // Add padding if end icon is present
                )}
                onChange={onChange}
                disabled={disabled}
            />
            {endIcon && <span className={classNames(iconClasses, 'right-6')}>{endIcon}</span>}
        </div>
    );
};

export default Input;
