import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { PATHS } from '../consts/paths';

interface SidebarContextType {
  activeSection: string;
  isMobileOpen: boolean;
  setActiveSection: (value: string) => void;
  setIsMobileOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
  defaultSection: string;
}

export function Sidebar({ defaultSection, className = '', children }: SidebarProps) {
  const [activeSection, setActiveSection] = useState(defaultSection);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Закрывать мобильное меню при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ activeSection, setActiveSection, isMobileOpen, setIsMobileOpen }}>
      <div className={className}>{children}</div>
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within Sidebar');
  }
  return context;
}

interface SidebarMenuProps {
  children: React.ReactNode;
  className?: string;
}

export function SidebarMenu({ className = '', children }: SidebarMenuProps) {
  const { isMobileOpen, setIsMobileOpen } = useSidebar();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden md:block ${className}`}>
        <nav className="space-y-1 flex flex-col gap-2">{children}</nav>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileOpen(false)} />

          {/* Sidebar */}
          <aside
            className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-800 shadow-xl z-50 md:hidden flex flex-col ${className}`}
          >
            <nav className="space-y-1 p-1 flex flex-col gap-1 overflow-y-auto flex-1">{children}</nav>
          </aside>
        </>
      )}
    </>
  );
}

interface SidebarMenuItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export function SidebarMenuItem({ value, className = '', children }: SidebarMenuItemProps) {
  const { setIsMobileOpen } = useSidebar();
  const location = useLocation();
  const isActive =
    location.pathname === PATHS[value.toUpperCase() as keyof typeof PATHS] ||
    (location.pathname === PATHS.HOME && value === 'profile');

  const handleClick = () => {
    setIsMobileOpen(false); // Закрыть меню на мобильных при выборе
  };

  const getPath = (value: string) => {
    return value === 'profile' ? PATHS.PROFILE : PATHS[value.toUpperCase() as keyof typeof PATHS];
  };

  return (
    <Link
      to={getPath(value)}
      onClick={handleClick}
      className={`block w-full text-left px-4 py-3 rounded-lg transition-colors cursor-pointer ${
        isActive
          ? 'bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-100'
          : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
      } ${className}`}
    >
      {children}
    </Link>
  );
}

interface SidebarContentProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export function SidebarContent({ value, className = '', children }: SidebarContentProps) {
  const location = useLocation();
  const isActive =
    location.pathname === PATHS[value.toUpperCase() as keyof typeof PATHS] ||
    (location.pathname === PATHS.HOME && value === 'profile');

  if (!isActive) {
    return null;
  }

  return <div className={className}>{children}</div>;
}

export function SidebarToggle() {
  const { isMobileOpen, setIsMobileOpen } = useSidebar();

  return (
    <button
      onClick={() => setIsMobileOpen(!isMobileOpen)}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-gray-200 transition-colors"
      aria-label="Toggle menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isMobileOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </>
        ) : (
          <>
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </>
        )}
      </svg>
    </button>
  );
}
