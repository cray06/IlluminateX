'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import VideoThumbnail from '@/component/dashboard/activity/VideoThumbnail';
import { mockLikedVideos } from '@/data/mockData';

export default function LikedVideosPage(): React.JSX.Element {
  const [selectedPeriod, setSelectedPeriod] = useState('This week');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const periods = ['This week', 'This month', 'This year', 'All time'];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-4">MY LAST ACTIVITY</h1>

        {/* Tabs */}
        <div className="flex items-center gap-8 mb-6">
          <button className="text-white font-medium pb-2">
            Watched videos
          </button>
          <button className="text-purple-400 font-medium pb-2 border-b-2 border-purple-400">
            Liked videos
          </button>
          <button className="text-white font-medium pb-2">
            Comments
          </button>
          <button className="text-white font-medium pb-2">
            Watch Later
          </button>
        </div>

        {/* Period Selector */}
        <div className="relative inline-block">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {selectedPeriod}
            <ChevronDown className="w-4 h-4" />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10 min-w-full">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg"
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="text-gray-400 text-sm mt-2">
          You liked 215 videos this week
        </p>
      </div>

      {/* Videos Grid */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockLikedVideos.map((video) => (
            <div key={video.id} className="h-40">
              <VideoThumbnail video={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
