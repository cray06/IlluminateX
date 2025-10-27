'use client';

import {JSX, useState} from 'react';
import ActivityTabs from '@/component/dashboard/communication/ActivityTabs';
import ChatWindow from '@/component/dashboard/communication/ChatWindow';
import ContactList from '@/component/dashboard/communication/ContactList';
import { mockChatContacts, mockChatMessages } from '@/data/mockData';
import {ChatContact, ChatMessage} from '@/types/dashboard';

type TabType = 'new-messages' | 'liked-videos' | 'comments' | 'watch-later';

export default function CommunicationPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('new-messages');
  const [selectedContactId, setSelectedContactId] = useState<string | null>(mockChatContacts[0].id);
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>(mockChatMessages);

  const selectedContact: ChatContact | undefined = mockChatContacts.find((c: ChatContact): boolean => c.id === selectedContactId);
  const messages: ChatMessage[] = selectedContactId ? chatMessages[selectedContactId] || [] : [];

  const handleSendMessage: (content: string) => void = (content: string): void => {
    if (!selectedContactId) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      senderId: 'me',
      content,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
    };

    setChatMessages((prev: Record<string, ChatMessage[]>): Record<string, ChatMessage[]> => ({
      ...prev,
      [selectedContactId]: [...(prev[selectedContactId] || []), newMessage],
    }));
  };

  return (
    <div className="h-full flex flex-col">
      <ActivityTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex gap-4 overflow-hidden">
        {selectedContact ? (
          <ChatWindow
            contact={selectedContact}
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#36013F] to-black rounded-xl">
            <p className="text-gray-400 text-lg">Select a contact to start chatting</p>
          </div>
        )}
        
        <ContactList
          contacts={mockChatContacts}
          selectedContactId={selectedContactId}
          onSelectContact={setSelectedContactId}
        />
      </div>
    </div>
  );
}
