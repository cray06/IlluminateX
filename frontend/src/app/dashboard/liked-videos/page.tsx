'use client';

import {JSX, useState} from 'react';
import { ChevronDown } from 'lucide-react';
import VideoThumbnail from '@/component/dashboard/activity/VideoThumbnail';
import LastActivity from '@/component/dashboard/activity/LastActivity';
import RealtimeActivity from '@/component/dashboard/sidebar-right/RealtimeActivity';
import { mockLikedVideos } from '@/data/mockData';
import {Video} from "@/types/dashboard";

export default function LikedVideosPage(): JSX.Element {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('This week');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const periods: string[] = ['This week', 'This month', 'This year', 'All time'];

  return (
    <div className="h-full flex space-x-4">
      <div className="flex-1 flex flex-col space-y-4 h-full overflow-y-auto hide-scrollbar">
        <div className="h-80 flex-shrink-0">
          <LastActivity />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-4">LIKED VIDEOS</h1>

            <div className="flex items-center gap-4">
              <div className="relative inline-block">
                <button
                  onClick={(): void => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {selectedPeriod}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10 min-w-full">
                    {periods.map((period: string): JSX.Element => (
                      <button
                        key={period}
                        onClick={(): void => {
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

              <p className="text-gray-400 text-sm">
                You liked 215 videos this week
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-4 gap-4">
              {mockLikedVideos.map((video: Video): JSX.Element => (
                <div key={video.id} className="h-40">
                  <VideoThumbnail video={video} showLike={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 h-full flex-shrink-0">
        <RealtimeActivity />
      </div>
    </div>
  );
}
