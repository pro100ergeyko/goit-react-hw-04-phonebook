import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Container,
  PhoneBookTitle,
  ContactTitle,
} from './Global.styled';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

const getContactsInLocalSrorage = () => {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));

  return savedContacts && savedContacts.length
    ? savedContacts
    : [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
};

export const App = () => {
  const [contacts, setContacts] = useState(getContactsInLocalSrorage);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (data, { resetForm }) => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    const contact = { ...data, id: nanoid() };
    setContacts(prevState => [contact, ...prevState]);
    resetForm();
  };

  const handlDelete = id =>
    setContacts(prevState => prevState.filter(contact => contact.id !== id));

  const handleFilter = evt => {
    setFilter(evt.target.value);
  };

  const handleContactFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <Wrapper>
      <Container>
        <PhoneBookTitle>Phonebook</PhoneBookTitle>
        <ContactsForm onSubmit={handleSubmit} />
      </Container>
      <Container>
        <ContactTitle>Contacts</ContactTitle>
        <ContactFilter onFilter={handleFilter} filter={filter} />
        <ContactList onDelete={handlDelete} contacts={handleContactFilter()} />
      </Container>
    </Wrapper>
  );
};
