'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { SidebarMenu } from '../lib/sidebar-menu';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`h-screen bg-white border-r transition-all duration-300 shadow-md overflow-hidden ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        {isOpen && <span className="text-lg font-bold">Menu</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 cursor-pointer"
        >
          {isOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Items */}
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

            {isOpen && Array.isArray(item.children) && (
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
