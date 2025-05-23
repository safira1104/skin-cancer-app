'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { SidebarMenu } from '../app/lib/sidebar-menu';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`h-screen bg-white border-r transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      } overflow-hidden shadow-md`}
    >
      <div className="flex items-center justify-center px-4 py-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
          <Menu />
        </button>
        {isOpen && <span className="ml-3 text-lg font-bold">Menu</span>}
      </div>

      <nav className="flex flex-col">
        {SidebarMenu.map((item, index) => (
          <div key={index} className="border-b last:border-none">
            <Link
              href={item.path}
              className={`flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition-all ${
                pathname === item.path ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              <item.icon className="w-5 h-5" />
              {isOpen && <span className="ml-3">{item.label}</span>}
            </Link>

            {isOpen && item.children && (
              <div className="ml-8 space-y-1 pb-2">
                {item.children.map((child, idx) => (
                  <Link
                    href={child.path}
                    key={idx}
                    className={`flex items-center px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md ${
                      pathname === child.path ? 'bg-gray-100 font-medium' : ''
                    }`}
                  >
                    <child.icon className="w-4 h-4" />
                    <span className="ml-2">{child.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
