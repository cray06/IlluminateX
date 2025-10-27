'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

interface PlaylistCreatedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlaylistCreatedModal({ isOpen, onClose }: PlaylistCreatedModalProps): React.JSX.Element {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return <></>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
        className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.2, type: 'spring', damping: 10, stiffness: 200 }}
        >
          <CheckCircle2 size={64} className="text-white" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white text-2xl font-bold"
        >
          Playlist Created
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-1 w-24 bg-white rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}

