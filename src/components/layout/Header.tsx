import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

/**
 * A fixed header component for the main application layout.
 * It spans the content area and is responsive to the sidebar's presence.
 * It acts as a container for the TopHeader which includes page title and actions.
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header 
      className={cn(
        'fixed top-0 right-0 h-16 bg-background border-b z-10',
        'left-0 md:left-64',
        className
      )}
    >
      <TopHeader />
    </header>
  );
};

export default Header;
