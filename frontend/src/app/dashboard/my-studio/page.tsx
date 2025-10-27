'use client';

import StudioLastActivity from '@/component/dashboard/studio/StudioLastActivity';
import ChannelViewsBanner from '@/component/dashboard/studio/ChannelViewsBanner';
import VideoListTable from '@/component/dashboard/studio/VideoListTable';
import RightSidebar from '@/component/dashboard/sidebar-right/RightSidebar';
import { mockStudioVideos } from '@/data/mockData';

export default function MyStudioPage(): React.JSX.Element {
  return (
    <div className="h-full flex space-x-4">
      <div className="flex-1 flex flex-col space-y-4 h-full overflow-y-auto hide-scrollbar">
        <div className="h-80 flex-shrink-0">
          <StudioLastActivity />
        </div>
        <div className="flex-shrink-0">
          <ChannelViewsBanner />
        </div>
        <div className="flex-1">
          <VideoListTable videos={mockStudioVideos} />
        </div>
      </div>
      <div className="w-80 h-full flex-shrink-0">
        <RightSidebar />
      </div>
    </div>
  );
}
