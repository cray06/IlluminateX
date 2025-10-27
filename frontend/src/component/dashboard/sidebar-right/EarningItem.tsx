'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { ActivityItem } from '@/types/dashboard';

interface EarningItemProps {
  earning: ActivityItem;
}

export default function EarningItem({ earning }: EarningItemProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
      <div className="flex items-center space-x-2">
        <div className="text-white font-medium text-sm">{earning.value}</div>
        {earning.change && (
          <div className={`flex items-center text-xs ${
            earning.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
          }`}>
            {earning.changeType === 'positive' ? (
              <TrendingUp className="h-3 w-3 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-1" />
            )}
            {earning.change}
          </div>
        )}
      </div>
      <div className="text-gray-500 text-xs">{earning.timeAgo}</div>
    </div>
  );
}
