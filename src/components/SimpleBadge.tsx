import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'outline' | 'success';
}

export function Badge({ variant = 'default', className = '', children }: BadgeProps) {
  const variantStyles = {
    default: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100',
    outline: 'bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300',
    success: 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
