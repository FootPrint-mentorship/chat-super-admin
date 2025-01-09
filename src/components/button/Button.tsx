import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
    text?: string;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    size?: 'sm' | 'md' | 'lg';
    rounded?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    className?: string;
};

// Tailwind color schemes for variants
const colorStyles: Record<string, Record<string, string>> = {
    primary: {
        contained: 'bg-blue-500 text-white hover:bg-blue-600',
        outlined: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
        text: 'text-secondaryBgColor hover:bg-blue-100',
    },
    secondary: {
        contained: 'bg-gray-500 text-white hover:bg-gray-600',
        outlined: 'border border-[#707FA3] text-[#707FA3] hover:bg-[#707FA3]',
        text: 'text-gray-500 hover:bg-gray-100',
    },
    success: {
        contained: 'bg-[#17CE89] text-white hover:bg-green-600',
        outlined: 'border border-green-500 text-[#17CE89] hover:bg-green-100',
        text: 'text-white',
    },
    danger: {
        contained: 'bg-red-500 text-white hover:bg-red-600',
        outlined: 'border border-red-500 text-red-500 hover:bg-red-100',
        text: 'text-red-500 hover:bg-red-100',
    },
    warning: {
        contained: 'bg-yellow-500 text-white hover:bg-yellow-600',
        outlined: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-100',
        text: 'text-yellow-500 hover:bg-yellow-100',
    },
    tertiary: {
        contained: 'bg-white text-white hover:bg-white-600',
        outlined: 'border border-white text-white',
        text: 'text-white',
    }
};

const Button: React.FC<ButtonProps> = ({
                                           text,
                                           variant = 'contained',
                                           color = 'primary',
                                           size = 'md',
                                           rounded = false,
                                           fullWidth = false,
                                           disabled = false,
                                           loading = false,
                                           icon,
                                           iconPosition = 'left',
                                           onClick,
                                           className = '',
                                       }) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium focus:outline-none transition duration-300 ease-in-out';

    const sizeClasses = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const variantStyles = colorStyles[color]?.[variant] || ''; // Fallback to an empty string if undefined

    const computedClasses = classNames(
        baseClasses,
        sizeClasses[size],
        variantStyles,
        rounded ? 'rounded-full' : 'rounded',
        fullWidth ? 'w-full' : '',
        disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
        className
    );

    const renderIcon = () => (
        loading ? (
            <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                ></path>
            </svg>
        ) : (
            icon
        )
    );

    return (
        <button className={computedClasses} onClick={onClick} disabled={disabled || loading}>
            {icon && iconPosition === 'left' && <span className="mr-2">{renderIcon()}</span>}
            {text && <span>{text}</span>}
            {icon && iconPosition === 'right' && <span className="ml-2">{renderIcon()}</span>}
        </button>
    );
};

export default Button;
