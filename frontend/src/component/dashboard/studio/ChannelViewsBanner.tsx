'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ChannelViewsBanner(): React.JSX.Element {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-4 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="relative">
          <select className="appearance-none bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium pr-8 cursor-pointer hover:bg-purple-700 transition-colors border-0 outline-none">
            <option>This week</option>
            <option>This month</option>
            <option>This year</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-white pointer-events-none" />
        </div>
        <div className="text-white text-sm">
          Your channel got <span className="text-purple-400 font-semibold">256 views</span> in the last 28 days
        </div>
      </div>
    </motion.div>
  );
}

