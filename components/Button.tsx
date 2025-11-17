
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'font-bold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg';

  const variantStyles = {
    primary: 'bg-[#c0a062] text-black hover:bg-[#d4b37a]',
    secondary: 'bg-transparent border-2 border-[#c0a062] text-[#c0a062] hover:bg-[#c0a062] hover:text-black',
  };

  const sizeStyles = {
    md: 'py-2 px-6 text-sm',
    lg: 'py-3 px-8 text-base',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClasses = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyles,
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
