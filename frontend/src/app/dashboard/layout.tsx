'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Sidebar from '@/component/dashboard/sidebar/Sidebar';
import DashboardNavbar from '@/component/dashboard/navbar/DashboardNavbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps): React.JSX.Element {
  return (
    <ThemeProvider>
      <div className="h-screen bg-gradient-to-b from-[#36013F] to-black">
        <div className="flex h-full">
          <Sidebar />
          <div className="flex-1 flex flex-col h-full">
            <div className="border-l border-gray-700">
              <DashboardNavbar />
            </div>
            <main className="flex-1 p-4 overflow-hidden hide-scrollbar border-l border-gray-700">
              {children}
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
