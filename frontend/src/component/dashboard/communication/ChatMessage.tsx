import { ChatMessage as ChatMessageType } from '@/types/dashboard';
import Image from 'next/image';

interface ChatMessageProps {
  message: ChatMessageType;
  avatar: string;
}

export default function ChatMessage({ message, avatar }: ChatMessageProps): React.JSX.Element {
  return (
    <div className={`flex gap-3 mb-4 ${message.isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={avatar}
          alt="avatar"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`flex flex-col ${message.isOwn ? 'items-end' : 'items-start'} max-w-[70%]`}>
        <div 
          className={`px-4 py-3 rounded-2xl ${
            message.isOwn 
              ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white' 
              : 'bg-[#2A1A3A] text-gray-200'
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1 px-1">{message.timestamp}</span>
      </div>
    </div>
  );
}

