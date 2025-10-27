'use client';

import { useState } from 'react';

const tabs: string[] = ['Watched videos', 'Liked videos', 'Comments', 'Watch Later'];

export default function ActivityTabs(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex space-x-1 mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === index
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
