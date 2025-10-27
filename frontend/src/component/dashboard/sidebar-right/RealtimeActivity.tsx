'use client';

import ActivityItem from './ActivityItem';
import { mockActivities } from '@/data/mockData';

export default function RealtimeActivity(): React.JSX.Element {
  return (
    <div className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-3 h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-3">
        <h3 className="text-white font-semibold text-sm">REAL-TIME ACTIVITY</h3>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
      </div>
      
      <div className="space-y-1 flex-1">
        <div className="text-gray-400 text-xs mb-2">NEW SUBSCRIBERS:</div>
        {mockActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}
