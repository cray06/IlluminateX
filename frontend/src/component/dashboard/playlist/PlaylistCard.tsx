'use client';

import { motion } from 'framer-motion';
import { Playlist } from '@/types/dashboard';

interface PlaylistCardProps {
  playlist: Playlist;
}

export default function PlaylistCard({ playlist }: PlaylistCardProps): React.JSX.Element {
  const IconComponent = playlist.icon;

  return (
    <motion.div 
      className="bg-black bg-opacity-40 rounded-lg p-3 hover:bg-black hover:bg-opacity-60 transition-colors cursor-pointer h-full flex flex-col border border-gray-700"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center space-x-3 flex-1">
        <div className="text-xl font-bold text-purple-400">{playlist.videoCount}</div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <IconComponent className="h-3 w-3 text-gray-400" />
            <h3 className="text-white font-medium text-sm">{playlist.title}</h3>
          </div>
          <p className="text-gray-400 text-xs mb-2 line-clamp-2">{playlist.description}</p>
          <span className={`text-xs px-2 py-1 rounded ${
            playlist.visibility === 'Public' 
              ? 'bg-green-900 text-green-400' 
              : 'bg-gray-700 text-gray-400'
          }`}>
            {playlist.visibility}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
