import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = ({ name, number }, { resetForm }) => {
    const { contacts } = this.state;

    const nameInContact = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (nameInContact) {
      alert(`${name} is already in contacts.`);

      return null;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
    resetForm();
  };

  handlDelete = id =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));

  handleFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  handleContactFilter = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <Wrapper>
        <Container>
          <PhoneBookTitle>Phonebook</PhoneBookTitle>
          <ContactsForm onSubmit={this.handleSubmit} />
        </Container>
        <Container>
          <ContactTitle>Contacts</ContactTitle>
          <ContactFilter onFilter={this.handleFilter} filter={filter} />
          <ContactList
            onDelete={this.handlDelete}
            contacts={this.handleContactFilter()}
          />
        </Container>
      </Wrapper>
    );
  }
}
