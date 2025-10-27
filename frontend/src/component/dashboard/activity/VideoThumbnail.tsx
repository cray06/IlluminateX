'use client';

import { motion } from 'framer-motion';
import { Video } from '@/types/dashboard';

interface VideoThumbnailProps {
  video: Video;
  showLike?: boolean;
}

export default function VideoThumbnail({ video, showLike = false }: VideoThumbnailProps): React.JSX.Element {
  return (
    <motion.div 
      className="group cursor-pointer h-full flex flex-col bg-black bg-opacity-20 rounded-lg p-2 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative flex-1">
        <div className="w-full h-24 bg-gray-700 rounded-lg mb-2 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center">
            <div className="text-white text-xs font-medium">VIDEO</div>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        {showLike && (
          <div className="absolute top-2 right-2">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.365 0L7 8.37667V23.3333H21.3617L25.6667 13.3V8.16667H15.9717L17.2783 1.89L15.365 0ZM0 9.33333H4.66667V23.3333H0V9.33333Z" fill="#36013F"/>
            </svg>
          </div>
        )}
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
