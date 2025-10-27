'use client';

import { 
  LayoutDashboard, 
  Video, 
  Heart, 
  List, 
  MessageCircle, 
  Clock, 
  History, 
  DollarSign, 
  BarChart3, 
  Settings, 
  Plus, 
  HelpCircle 
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';
import ThemeToggle from './ThemeToggle';
import { mockUser } from '@/data/mockData';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Video, label: 'My studio', path: '/dashboard/my-studio' },
  { icon: Heart, label: 'Liked videos', path: '/dashboard/liked-videos' },
  { icon: List, label: 'Playlist', path: '/dashboard/playlist' },
  { icon: MessageCircle, label: 'Communication', path: '/dashboard/communication' },
  { icon: Clock, label: 'Watch later', path: '/dashboard/watch-later' },
  { icon: History, label: 'History', path: '/dashboard/history' },
  { icon: DollarSign, label: 'Earnings', path: '/dashboard/earnings' },
  { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
];

const bottomItems: MenuItem[] = [
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  { icon: Plus, label: 'NEW', path: '/dashboard/new' },
  { icon: HelpCircle, label: 'Support', path: '/dashboard/support' },
];

export default function Sidebar(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <div className="w-56 h-screen bg-gradient-to-b from-[#36013F] to-black flex flex-col">
      <div className="p-[1.06rem] border-b border-gray-700">
        <div className="text-white font-bold text-lg">IlluminateX</div>
      </div>
      
      <div className="p-3 border-b border-gray-700">
        <div className="text-white font-medium text-sm">{mockUser.name}</div>
        <div className="text-gray-400 text-xs">{mockUser.studio}</div>
      </div>

      <div className="flex-1 p-3 space-y-1">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.path}
            path={item.path}
          />
        ))}
      </div>

      <div className="mt-auto p-3 space-y-1">
        {bottomItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.path}
            path={item.path}
          />
        ))}
      </div>

      <div className="p-3">
        <ThemeToggle />
      </div>
    </div>
  );
}
