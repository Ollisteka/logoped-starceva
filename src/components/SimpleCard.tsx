import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ className = '', children }: CardProps) {
  return <div className={`bg-white rounded-xl border border-gray-200 ${className}`}>{children}</div>;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ className = '', children }: CardHeaderProps) {
  return <div className={`px-6 pt-6 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ className = '', children }: CardTitleProps) {
  return <h2 className={`text-2xl font-semibold ${className}`}>{children}</h2>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ className = '', children }: CardContentProps) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
