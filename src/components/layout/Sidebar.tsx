import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

/**
 * A fixed, full-height sidebar for the main application layout.
 * It is responsive, hiding on small screens and appearing on medium screens and up.
 * It acts as a container for the main navigation component, SidebarNav.
 */
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside 
      className={cn(
        'hidden md:flex flex-col w-64 bg-sidebar border-r border-sidebar-border',
        'fixed inset-y-0 left-0 z-20',
        className
      )}
    >
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
