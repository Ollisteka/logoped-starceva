import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'default', 
  size = 'default',
  className = '', 
  children,
  ...props 
}: ButtonProps) {
  const variantStyles = {
    default: 'bg-gray-900 text-white hover:bg-gray-800',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
    outline: 'bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700'
  };

  const sizeStyles = {
    default: 'px-4 py-2',
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-6 py-3'
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
