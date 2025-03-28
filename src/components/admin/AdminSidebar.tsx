
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Users, ShoppingCart, Star, Settings, LogOut, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SidebarLink {
  icon: React.ElementType;
  label: string;
  path: string;
}

const sidebarLinks: SidebarLink[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Package, label: 'Products', path: '/admin/products' },
  { icon: ShoppingCart, label: 'Orders', path: '/admin/orders' },
  { icon: Users, label: 'Customers', path: '/admin/customers' },
  { icon: Star, label: 'Reviews', path: '/admin/reviews' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 h-screen sticky top-0 z-30",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <Link to="/" className="font-bold text-xl text-exclusive">Exclusive</Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight /> : <X />}
        </Button>
      </div>
      
      <nav className="p-2">
        <ul className="space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const IconComponent = link.icon;
            
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md transition-colors",
                    isActive 
                      ? "bg-exclusive text-white" 
                      : "hover:bg-gray-100"
                  )}
                >
                  <IconComponent size={20} />
                  {!collapsed && <span className="ml-3">{link.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-4 w-full px-2">
        <Link
          to="/login"
          className={cn(
            "flex items-center py-2 px-3 rounded-md text-red-500 hover:bg-red-50 transition-colors",
            collapsed ? "justify-center" : ""
          )}
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
