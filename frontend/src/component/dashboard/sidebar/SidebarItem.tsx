'use client';

import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  path?: string;
}

export default function SidebarItem({ icon: Icon, label, isActive = false, onClick, path }: SidebarItemProps): React.JSX.Element {
  const content = (
    <div
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-purple-600 text-white'
          : 'text-gray-400 hover:text-white hover:bg-gray-800'
      }`}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );

  if (path) {
    return (
      <Link href={path}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  );
}
