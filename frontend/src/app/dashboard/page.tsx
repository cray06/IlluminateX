'use client';

import LastActivity from '@/component/dashboard/activity/LastActivity';
import CreativityOverview from '@/component/dashboard/analytics/CreativityOverview';
import PlaylistSection from '@/component/dashboard/playlist/PlaylistSection';
import RightSidebar from '@/component/dashboard/sidebar-right/RightSidebar';

export default function DashboardPage(): React.JSX.Element {
  return (
    <div className="h-full flex space-x-4">
      <div className="flex-1 flex flex-col space-y-4 h-full overflow-y-auto hide-scrollbar">
        <div className="h-96 flex-shrink-0">
          <LastActivity />
        </div>
        <div className="h-[500px] flex-shrink-0">
          <CreativityOverview />
        </div>
        <div className="h-48 flex-shrink-0">
          <PlaylistSection />
        </div>
      </div>
      <div className="w-80 h-full flex-shrink-0">
        <RightSidebar />
      </div>
    </div>
  );
}
