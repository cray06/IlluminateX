'use client';

import { Bell, Camera } from 'lucide-react';
import { mockUser } from '@/data/mockData';
import Image from 'next/image';

export default function UserProfile(): React.JSX.Element {
  return (
    <div className="flex items-center space-x-3">
      <button className="flex items-center space-x-1 px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
        <Camera className="h-3 w-3" />
        <span className="text-xs font-medium">UPLOAD</span>
      </button>
      
      <div className="relative">
        <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
          <Bell className="h-4 w-4" />
          {mockUser.notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {mockUser.notifications}+
            </span>
          )}
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800">
          <Image
            src={mockUser.avatar}
            alt={mockUser.name}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
