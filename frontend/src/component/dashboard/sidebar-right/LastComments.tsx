'use client';

import CommentItem from './CommentItem';
import { mockComments } from '@/data/mockData';

export default function LastComments(): React.JSX.Element {
  return (
    <div className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-3 h-full flex flex-col">
      <h3 className="text-white font-semibold text-sm mb-3">LAST COMMENTS</h3>
      <div className="space-y-0 flex-1 overflow-y-auto">
        {mockComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
