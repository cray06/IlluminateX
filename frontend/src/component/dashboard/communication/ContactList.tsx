import { ChatContact } from '@/types/dashboard';
import ContactItem from './ContactItem';

interface ContactListProps {
  contacts: ChatContact[];
  selectedContactId: string | null;
  onSelectContact: (contactId: string) => void;
}

export default function ContactList({ contacts, selectedContactId, onSelectContact }: ContactListProps): React.JSX.Element {
  return (
    <div className="w-80 flex-shrink-0 bg-gradient-to-br from-[#36013F] to-black rounded-xl p-4 overflow-y-auto hide-scrollbar">
      <h2 className="text-white font-semibold text-lg mb-4">FRIENDS</h2>
      <div className="space-y-2">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            isSelected={selectedContactId === contact.id}
            onClick={() => onSelectContact(contact.id)}
          />
        ))}
      </div>
    </div>
  );
}

