import { ChatContact } from '@/types/dashboard';
import Image from 'next/image';

interface ContactItemProps {
  contact: ChatContact;
  isSelected: boolean;
  onClick: () => void;
}

export default function ContactItem({ contact, isSelected, onClick }: ContactItemProps): React.JSX.Element {
  return (
    <div
      onClick={onClick}
      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#2A1A3A] ${
        isSelected ? 'bg-[#2A1A3A]' : ''
      }`}
    >
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={contact.avatar}
            alt={contact.username}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        {contact.isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1A0A2A]"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-white font-medium text-sm">{contact.username}</span>
          <span className="text-gray-500 text-xs">{contact.timestamp}</span>
        </div>
        <p className="text-gray-400 text-xs line-clamp-2">{contact.lastMessage}</p>
      </div>
      {contact.unreadCount && contact.unreadCount > 0 && (
        <div className="flex-shrink-0">
          <div className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {contact.unreadCount}
          </div>
        </div>
      )}
    </div>
  );
}

