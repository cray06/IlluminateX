'use client';

import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

export default function DashboardNavbar(): React.JSX.Element {
  return (
    <nav className="w-full bg-gradient-to-b from-[#36013F] to-black">
      <div className="px-4 py-3.5 flex items-center gap-4">
        <div className="flex-1">
          <SearchBar />
        </div>
        <UserProfile />
      </div>
    </nav>
  );
}
