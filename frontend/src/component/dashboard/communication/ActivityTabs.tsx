import { useState } from 'react';

type TabType = 'new-messages' | 'liked-videos' | 'comments' | 'watch-later';

interface ActivityTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function ActivityTabs({ activeTab, onTabChange }: ActivityTabsProps): React.JSX.Element {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'new-messages', label: 'New Messages' },
    { id: 'liked-videos', label: 'Liked videos' },
    { id: 'comments', label: 'Comments' },
    { id: 'watch-later', label: 'Watch Later' },
  ];

  return (
    <div className="flex items-center gap-8 mb-6">
      <h2 className="text-gray-400 text-sm font-medium tracking-wider">ACTIVITY</h2>
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`text-sm transition-colors ${
              activeTab === tab.id
                ? 'text-white font-medium'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

