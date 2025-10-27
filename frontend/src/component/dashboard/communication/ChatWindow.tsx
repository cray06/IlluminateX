import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { ChatMessage as ChatMessageType, ChatContact } from '@/types/dashboard';
import ChatMessage from './ChatMessage';

interface ChatWindowProps {
  contact: ChatContact;
  messages: ChatMessageType[];
  onSendMessage: (message: string) => void;
}

export default function ChatWindow({ contact, messages, onSendMessage }: ChatWindowProps): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (): void => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-br from-[#36013F] to-black rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-white font-semibold text-lg">{contact.username}</h2>
        <p className="text-gray-400 text-sm">{contact.isOnline ? 'Online' : 'Offline'}</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 hide-scrollbar">
        {messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            message={message}
            avatar={message.isOwn ? '/homepage/homepage_sphere.jpg' : contact.avatar}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-[#2A1A3A] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

