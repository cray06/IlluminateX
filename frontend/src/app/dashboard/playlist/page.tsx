'use client';

import {JSX, useState} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LastActivity from '@/component/dashboard/activity/LastActivity';
import RightSidebar from '@/component/dashboard/sidebar-right/RightSidebar';
import CreatePlaylistModal from '@/component/dashboard/playlist/CreatePlaylistModal';
import PlaylistCreatedModal from '@/component/dashboard/playlist/PlaylistCreatedModal';
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function PlaylistPage(): JSX.Element {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();

  const handleCreateSuccess: () => void = (): void => {
    setIsCreateModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleSuccessModalClose: () => void = (): void => {
    setIsSuccessModalOpen(false);
    router.push('/dashboard/playlist');
  };

  return (
    <>
      <div className="h-full flex space-x-4">
        <div className="flex-1 flex flex-col space-y-4 h-full overflow-y-auto hide-scrollbar">
          <div className="h-96 flex-shrink-0">
            <LastActivity />
          </div>
          
          <motion.div 
            className="flex-1 flex flex-col items-center justify-center px-8 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-2xl flex flex-col items-center text-center">
              <motion.div 
                className="mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/playlist/image.png"
                  alt="Create playlist"
                  width={400}
                  height={400}
                  className="w-auto h-auto"
                  priority
                />
              </motion.div>
              
              <motion.h3 
                className="text-white text-xl font-medium mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                There are 0 video
              </motion.h3>
              
              <motion.p 
                className="text-gray-400 text-sm mb-8 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Create your playlist, then add existing content or upload new videos
              </motion.p>
              
              <motion.button
                onClick={(): void => setIsCreateModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create New Playlist
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <div className="w-80 h-full flex-shrink-0">
          <RightSidebar />
        </div>
      </div>

      <CreatePlaylistModal
        isOpen={isCreateModalOpen}
        onClose={(): void => setIsCreateModalOpen(false)}
        onSuccess={handleCreateSuccess}
      />

      <PlaylistCreatedModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
      />
    </>
  );
}
