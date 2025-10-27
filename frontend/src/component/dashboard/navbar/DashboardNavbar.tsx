'use client';

import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

export default function DashboardNavbar(): React.JSX.Element {
  return (
    <nav className="w-full bg-gradient-to-r from-[#36013F] to-black border-b border-gray-700">
      <div className="px-4 py-3.5 flex items-center justify-between">
        <div className="text-white font-bold text-lg">IlluminateX</div>
        <SearchBar />
        <UserProfile />
      </div>
    </nav>
  );
}
