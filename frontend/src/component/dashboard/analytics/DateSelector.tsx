'use client';

import { ChevronDown } from 'lucide-react';

export default function DateSelector(): React.JSX.Element {
  return (
    <div className="flex space-x-4 mb-6">
      <div className="relative">
        <select className="appearance-none bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 pr-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option>This week</option>
          <option>This month</option>
          <option>This year</option>
        </select>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
      </div>
      
      <div className="relative">
        <select className="appearance-none bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 pr-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option>Channel name one</option>
          <option>Channel name two</option>
          <option>Channel name three</option>
        </select>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}
