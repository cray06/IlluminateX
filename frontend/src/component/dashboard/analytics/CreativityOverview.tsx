'use client';

import { motion } from 'framer-motion';
import StatCard from './StatCard';
import DateSelector from './DateSelector';
import AnalyticsChart from './AnalyticsChart';
import { mockStats } from '@/data/mockData';

export default function CreativityOverview(): React.JSX.Element {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-4 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-white text-lg font-semibold mb-3">MY CREATIVITY OVERVIEW</h2>
      <DateSelector />
      
      <div className="grid grid-cols-4 gap-3 mb-4">
        {mockStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <StatCard stat={stat} />
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="flex-1 min-h-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <AnalyticsChart />
      </motion.div>
    </motion.div>
  );
}
