import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
//import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      {/* <ContactList list={contacts} /> */}
    </div>
  );
};

export default App;
