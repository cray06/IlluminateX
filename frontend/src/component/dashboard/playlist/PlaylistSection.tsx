'use client';

import { motion } from 'framer-motion';
import PlaylistCard from './PlaylistCard';
import { mockPlaylists } from '@/data/mockData';

export default function PlaylistSection(): React.JSX.Element {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-4 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-white text-lg font-semibold mb-3">MY PLAYLIST</h2>
      <div className="grid grid-cols-3 gap-3 flex-1">
        {mockPlaylists.map((playlist, index) => (
          <motion.div
            key={playlist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="h-full"
          >
            <PlaylistCard playlist={playlist} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
