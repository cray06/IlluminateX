'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { StatCard as StatCardType } from '@/types/dashboard';

interface StatCardProps {
  stat: StatCardType;
}

export default function StatCard({ stat }: StatCardProps): React.JSX.Element {
  const IconComponent = stat.icon;

  return (
    <motion.div 
      className="bg-black bg-opacity-40 rounded-lg p-4 hover:bg-black hover:bg-opacity-60 transition-colors border border-gray-700"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-gray-400 text-sm">{stat.title}</div>
        <IconComponent className="h-4 w-4 text-gray-400" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
      <div className={`flex items-center text-sm ${
        stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
      }`}>
        {stat.changeType === 'positive' ? (
          <TrendingUp className="h-3 w-3 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 mr-1" />
        )}
        {stat.change}
      </div>
    </motion.div>
  );
}
