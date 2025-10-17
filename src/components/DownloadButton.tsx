import React from 'react';

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
}

export function DownloadButton({ 
  href, 
  children, 
  className = '', 
  download = true 
}: DownloadButtonProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      download={download}
      className={`inline-flex cursor-pointer items-center gap-2 text-sm text-primary hover:text-primary/80 hover:underline transition-colors ${className}`}
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className="flex-shrink-0"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7,10 12,15 17,10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      {children}
    </a>
  );
}
