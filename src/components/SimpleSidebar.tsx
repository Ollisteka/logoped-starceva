import React, { createContext, useContext, useState, useEffect } from 'react';

interface SidebarContextType {
  activeSection: string;
  setActiveSection: (value: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProps {
  defaultSection: string;
  className?: string;
  children: React.ReactNode;
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
  if (!context) throw new Error('useSidebar must be used within Sidebar');
  return context;
}

interface SidebarMenuProps {
  className?: string;
  children: React.ReactNode;
}

export function SidebarMenu({ className = '', children }: SidebarMenuProps) {
  const { isMobileOpen, setIsMobileOpen } = useSidebar();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden md:block ${className}`}>
        <nav className="space-y-1">
          {children}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          
          {/* Sidebar */}
          <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 md:hidden ${className}`}>
            <nav className="space-y-1 p-4">
              {children}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}

interface SidebarMenuItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function SidebarMenuItem({ value, className = '', children }: SidebarMenuItemProps) {
  const { activeSection, setActiveSection, setIsMobileOpen } = useSidebar();
  const isActive = activeSection === value;

  const handleClick = () => {
    setActiveSection(value);
    setIsMobileOpen(false); // Закрыть меню на мобильных при выборе
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
        isActive
          ? 'bg-primary/10 text-primary'
          : 'text-gray-700 hover:bg-gray-100'
      } ${className}`}
    >
      {children}
    </button>
  );
}

interface SidebarContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function SidebarContent({ value, className = '', children }: SidebarContentProps) {
  const { activeSection } = useSidebar();
  if (activeSection !== value) return null;

  return <div className={className}>{children}</div>;
}

export function SidebarToggle() {
  const { isMobileOpen, setIsMobileOpen } = useSidebar();

  return (
    <button
      onClick={() => setIsMobileOpen(!isMobileOpen)}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </>
        )}
      </svg>
    </button>
  );
}
