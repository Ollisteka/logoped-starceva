import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  children: React.ReactNode;
  className?: string;
  defaultValue: string;
}

export function Tabs({ defaultValue, className = '', children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ className = '', children }: TabsListProps) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

interface TabsTriggerProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export function TabsTrigger({ value, className = '', children }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within Tabs');
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-white dark:bg-slate-800 shadow-sm'
          : 'bg-transparent hover:bg-white/50 dark:hover:bg-slate-700/50'
      } ${className}`}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export function TabsContent({ value, className = '', children }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within Tabs');
  }

  const { activeTab } = context;
  if (activeTab !== value) {
    return null;
  }

  return <div className={className}>{children}</div>;
}
