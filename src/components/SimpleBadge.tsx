import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'outline' | 'success';
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = 'default', className = '', children }: BadgeProps) {
  const variantStyles = {
    default: 'bg-gray-900 text-gray-900',
    secondary: 'bg-gray-100 text-gray-900',
    outline: 'bg-transparent border border-gray-300 text-gray-700',
    success: 'bg-green-200 text-green-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
