'use client';

import { ActivityItem } from '@/types/dashboard';

interface CommentItemProps {
  comment: ActivityItem;
}

export default function CommentItem({ comment }: CommentItemProps): React.JSX.Element {
  return (
    <div className="py-2 border-b border-gray-700 last:border-b-0">
      <div className="flex items-start space-x-3">
        <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-700 rounded-full flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <div className="text-white text-sm font-medium">{comment.user}</div>
          <div className="text-gray-300 text-xs mt-1">{comment.content}</div>
        </div>
        <div className="text-gray-500 text-xs">{comment.timeAgo}</div>
      </div>
    </div>
  );
}
