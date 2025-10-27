'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockChartData } from '@/data/mockData';

export default function AnalyticsChart(): React.JSX.Element {
  return (
    <div className="bg-black bg-opacity-40 rounded-lg p-3 h-full flex flex-col border border-gray-700">
      <div className="text-white text-sm mb-3 font-medium">Your channel got 256 views in the last 28 days</div>
      <div className="flex-1" style={{ minHeight: '200px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis 
              dataKey="date" 
              stroke="#E5E7EB"
              fontSize={10}
            />
            <YAxis 
              stroke="#E5E7EB"
              fontSize={10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #4B5563',
                borderRadius: '8px',
                color: '#F9FAFB',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
              }}
            />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 3, fill: '#ffffff' }}
            />
            <Line
              type="monotone"
              dataKey="subscribers"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: '#8B5CF6', strokeWidth: 2, fill: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
