'use client';

import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { StudioVideo } from '@/types/dashboard';

interface VideoListTableProps {
  videos: StudioVideo[];
}

export default function VideoListTable({ videos }: VideoListTableProps): React.JSX.Element {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#36013F] to-black rounded-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-3">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-gray-700 rounded-lg p-3 hover:bg-gray-800 bg-opacity-30 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className="relative w-24 h-16 bg-gray-700 rounded-lg flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm truncate">{video.title}</h3>
                    <p className="text-gray-400 text-xs truncate">{video.description}</p>
                  </div>
                  <div className={`flex items-center space-x-1 text-xs ${video.visibility === 'Public' ? 'text-green-400' : 'text-gray-500'}`}>
                    {video.visibility === 'Public' ? (
                      <Eye className="h-3 w-3" />
                    ) : (
                      <EyeOff className="h-3 w-3" />
                    )}
                    <span>{video.visibility}</span>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-500 mb-1">Duration</div>
                    <div className="text-white">{video.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Date</div>
                    <div className="text-white">{video.date}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Views</div>
                    <div className="text-green-400 font-semibold">{video.views}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Likes</div>
                    <div className="text-white">{video.likes}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Saves</div>
                    <div className="text-white">{video.saves}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Watch later</div>
                    <div className="text-white">{video.watchLater}</div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-gray-500">Last viewed</div>
                        <div className="text-white">{video.lastViewed}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Subscribers</div>
                        <div className="text-white">{video.subscribers}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Comments</div>
                        <div className="text-white">{video.comments}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-green-400 font-semibold">Share</div>
                        <div className="text-green-400 font-bold">{video.shares}</div>
                      </div>
                      <div>
                        <div className="text-purple-400 font-semibold">Illux</div>
                        <div className="text-purple-400 font-bold">{video.illux}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

