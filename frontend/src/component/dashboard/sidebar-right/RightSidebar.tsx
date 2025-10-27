'use client';

import RealtimeActivity from './RealtimeActivity';
import LastComments from './LastComments';
import RecentEarnings from './RecentEarnings';

export default function RightSidebar(): React.JSX.Element {
  return (
    <div className="w-80 h-full flex flex-col space-y-4">
      <div className="flex-1">
        <RealtimeActivity />
      </div>
      <div className="flex-1">
        <LastComments />
      </div>
      <div className="flex-1">
        <RecentEarnings />
      </div>
    </div>
  );
}
