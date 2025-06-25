import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  Receipt, 
  ShoppingCart, 
  Mail, 
  Archive, 
  Calendar, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive = false }) => (
  <a
    href={href}
    className={cn(
      'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      isActive && 'bg-sidebar-accent text-sidebar-accent-foreground'
    )}
  >
    <Icon className="h-4 w-4" />
    {label}
  </a>
);

const SidebarNav: React.FC = () => {
  const mainNavItems = [
    { href: '#', icon: LayoutGrid, label: 'Dashboard', isActive: true },
    { href: '#', icon: Users, label: 'Leads' },
    { href: '#', icon: User, label: 'Customers' },
    { href: '#', icon: FileText, label: 'Proposals' },
    { href: '#', icon: Receipt, label: 'Invoices' },
    { href: '#', icon: ShoppingCart, label: 'Items' },
    { href: '#', icon: Mail, label: 'Mail' },
    { href: '#', icon: Archive, label: 'Shoebox' },
    { href: '#', icon: Calendar, label: 'Calendar' },
  ];

  const helpNavItems = [
    { href: '#', icon: HelpCircle, label: 'Help' },
    { href: '#', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="flex flex-col h-full">
      <div className="flex items-center gap-2 h-16 px-4 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-sidebar-primary-foreground"></div>
        </div>
        <span className="font-semibold text-lg text-sidebar-primary">bo</span>
      </div>
      <div className="flex-1 py-4 px-2 space-y-4">
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-auto p-2 border-t border-sidebar-border">
        <div className="space-y-1">
          {helpNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
          {/* The image shows a duplicate Help link, reproducing for accuracy */}
          <NavLink href="#" icon={HelpCircle} label="Help" /> 
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
