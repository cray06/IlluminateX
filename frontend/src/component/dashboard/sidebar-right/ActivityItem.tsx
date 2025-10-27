'use client';

import { ActivityItem as ActivityItemType } from '@/types/dashboard';

interface ActivityItemProps {
  activity: ActivityItemType;
}

export default function ActivityItem({ activity }: ActivityItemProps): React.JSX.Element {
  return (
    <div className="flex items-center space-x-3 py-2">
      <div className="w-8 h-8 bg-gradient-to-tr from-green-500 to-purple-700 rounded-full flex-shrink-0"></div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-medium">{activity.user}</div>
        {activity.value && (
          <div className="text-gray-400 text-xs">{activity.value}</div>
        )}
        {activity.content && (
          <div className="text-gray-300 text-xs truncate">{activity.content}</div>
        )}
      </div>
      <div className="text-gray-500 text-xs">{activity.timeAgo}</div>
    </div>
  );
}
