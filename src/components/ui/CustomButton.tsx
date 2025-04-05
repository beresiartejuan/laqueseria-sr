
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}) => {
  const baseClasses = "font-medium rounded-md transition-all duration-300";
  
  const variantClasses = {
    primary: 'bg-cheese-gold text-cheese-black hover:bg-opacity-80',
    secondary: 'border border-cheese-gold text-cheese-gold hover:bg-cheese-gold hover:text-cheese-black',
    outline: 'border border-cheese-white text-cheese-white hover:bg-cheese-white hover:text-cheese-black',
  };
  
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-6',
    lg: 'py-3 px-8 text-lg',
  };
  
  return (
    <button 
      className={cn(
        baseClasses, 
        variantClasses[variant], 
        sizeClasses[size], 
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
