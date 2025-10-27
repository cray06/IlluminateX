'use client';

import { motion } from 'framer-motion';
import ActivityTabs from '../activity/ActivityTabs';
import VideoThumbnail from '../activity/VideoThumbnail';
import { mockVideos } from '@/data/mockData';

export default function StudioLastActivity(): React.JSX.Element {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-4 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-lg font-semibold mb-3">MY LAST ACTIVITY</h2>
      <ActivityTabs />
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {mockVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex-shrink-0 w-48"
          >
            <VideoThumbnail video={video} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

