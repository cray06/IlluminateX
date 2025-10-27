'use client';

import { motion } from 'framer-motion';
import { Video } from '@/types/dashboard';

interface VideoThumbnailProps {
  video: Video;
}

export default function VideoThumbnail({ video }: VideoThumbnailProps): React.JSX.Element {
  return (
    <motion.div 
      className="group cursor-pointer h-full flex flex-col bg-black bg-opacity-20 rounded-lg p-2 border border-gray-700 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative flex-1">
        <div className="w-full h-24 bg-gray-700 rounded-lg mb-2 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <div className="text-white text-xs font-medium">VIDEO</div>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="space-y-1 min-w-0 w-full">
        <h3 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors line-clamp-2 overflow-hidden">
          {video.title}
        </h3>
        <p className="text-xs text-gray-400 truncate">{video.author}</p>
        <p className="text-xs text-gray-500 truncate">{video.watchedAt}</p>
      </div>
    </motion.div>
  );
}
