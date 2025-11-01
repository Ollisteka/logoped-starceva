import React, { useState } from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

export function Avatar({ className = '', children }: AvatarProps) {
  return <div className={`relative overflow-hidden rounded-full ${className}`}>{children}</div>;
}

interface AvatarImageProps {
  alt: string;
  className?: string;
  src: string;
}

export function AvatarImage({ src, alt, className = '' }: AvatarImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return null;
  }

  return (
    <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} onError={() => setError(true)} />
  );
}

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export function AvatarFallback({ className = '', children }: AvatarFallbackProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`}>
      {children}
    </div>
  );
}
