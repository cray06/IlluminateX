'use client';

import { Search } from 'lucide-react';

export default function SearchBar(): React.JSX.Element {
  return (
    <div className="flex-1 max-w-md mx-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <Search className="h-3 w-3 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-7 pr-3 py-1.5 text-sm border border-gray-600 rounded-lg bg-gray-800 bg-opacity-60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Search Content..."
        />
      </div>
    </div>
  );
}
