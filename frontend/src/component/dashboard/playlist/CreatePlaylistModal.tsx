'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

interface CreatePlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

type Visibility = 'Public' | 'Private' | 'Subscribers';

export default function CreatePlaylistModal({ isOpen, onClose, onSuccess }: CreatePlaylistModalProps): React.JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [visibility, setVisibility] = useState<Visibility>('Public');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const handleCreate = (): void => {
    if (!title.trim()) return;
    
    setIsCreating(true);
    
    setTimeout(() => {
      setIsCreating(false);
      onSuccess();
      setTitle('');
      setDescription('');
      setVisibility('Public');
    }, 1500);
  };

  const handleClose = (): void => {
    if (!isCreating) {
      onClose();
      setTitle('');
      setDescription('');
      setVisibility('Public');
      setIsDropdownOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="bg-gradient-to-br from-[#36013F] to-black rounded-2xl w-full max-w-md border border-gray-700 shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h2 className="text-white text-xl font-semibold">Create New Playlist</h2>
                <button
                  onClick={handleClose}
                  disabled={isCreating}
                  className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title (required)
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    placeholder="Add Title"
                    disabled={isCreating}
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                    placeholder="Add Description"
                    rows={4}
                    disabled={isCreating}
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400 resize-none disabled:opacity-50"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Who can View
                  </label>
                  <button
                    type="button"
                    onClick={() => !isCreating && setIsDropdownOpen(!isDropdownOpen)}
                    disabled={isCreating}
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 flex items-center justify-between disabled:opacity-50"
                  >
                    <span>{visibility}</span>
                    <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
                      >
                        {(['Public', 'Private', 'Subscribers'] as Visibility[]).map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setVisibility(option);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-gray-900 hover:bg-purple-100 transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="bg-gradient-to-br from-[#2A1A3A] to-black rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-400 text-sm text-center mb-3">
                    Choose existing videos to add to your playlist.
                  </p>
                  <button
                    type="button"
                    disabled={isCreating}
                    className="w-full border border-gray-500 text-gray-300 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm disabled:opacity-50"
                  >
                    + ADD VIDEO
                  </button>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={handleCreate}
                  disabled={!title.trim() || isCreating}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCreating ? 'Creating...' : 'Create'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

