
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  label: string;
  path: string;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    title: 'Manage My Account',
    items: [
      { label: 'My Profile', path: '/account/profile' },
      { label: 'Address Book', path: '/account/address' },
      { label: 'My Payment Options', path: '/account/payment' }
    ]
  },
  {
    title: 'My Orders',
    items: [
      { label: 'My Returns', path: '/account/returns' },
      { label: 'My Cancellations', path: '/account/cancellations' }
    ]
  },
  {
    title: 'My Wishlist',
    items: [
      { label: 'View Wishlist', path: '/account/wishlist' }
    ]
  }
];

const AccountSidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="pr-8">
      {menuGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-6">
          <h3 className="font-semibold text-base mb-3">{group.title}</h3>
          <ul className="space-y-3">
            {group.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  to={item.path}
                  className={`text-sm ${isActive(item.path) ? 'text-exclusive font-medium' : 'text-gray-600 hover:text-exclusive'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AccountSidebar;
