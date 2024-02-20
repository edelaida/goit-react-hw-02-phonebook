import React from 'react';
import s from './ContactForm.module.css';
import { ContactList } from '../ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
    filter: '',
    contacts: [
      {
        id: uuidv4(),
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: uuidv4(),
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: uuidv4(),
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: uuidv4(),
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.prevenDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: uuidv4() },
        ],
      };
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(person => person.id !== id),
      };
    });
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <div className={s.block}>
        <form>
          <p>Name</p>
          <input
            valuie={name}
            type="text"
            name="name"
            onChange={this.handleChange}
            required
          />
          <input
            value={number}
            type="tel"
            name="number"
            onChange={this.handleChange}
          />
          <button type="submit" onSubmit={this.handleSubmit}>
            add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <input
          value={filter}
          name="filter"
          type="text"
          onChange={this.handleChange}
        />
        <ContactList
          list={contacts}
          deleteList={this.handleDelete}
          filter={filter}
        />
      </div>
    );
  }
}
