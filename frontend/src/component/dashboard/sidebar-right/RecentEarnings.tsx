'use client';

import { JSX } from 'react';
import EarningItem from './EarningItem';
import { mockEarnings } from '@/data/mockData';

export default function RecentEarnings(): JSX.Element {
  return (
    <div className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-3 h-full flex flex-col">
      <h3 className="text-white font-semibold text-sm mb-3">RECENT EARNINGS</h3>
      <div className="space-y-0 flex-1 overflow-y-auto">
        {mockEarnings.map((earning) => (
          <EarningItem key={earning.id} earning={earning} />
        ))}
      </div>
    </div>
  );
}
