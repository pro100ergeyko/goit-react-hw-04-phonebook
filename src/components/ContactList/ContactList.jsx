import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ onDelete, contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
