'use client';

import { motion } from 'framer-motion';
import ActivityTabs from './ActivityTabs';
import VideoThumbnail from './VideoThumbnail';
import { mockVideos } from '@/data/mockData';

export default function LastActivity(): React.JSX.Element {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-4 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-lg font-semibold mb-3">MY LAST ACTIVITY</h2>
      <ActivityTabs />
      <div className="grid grid-cols-4 gap-3 flex-1">
        {mockVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <VideoThumbnail video={video} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
