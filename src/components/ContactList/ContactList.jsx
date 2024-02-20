import React from 'react';
import s from './ContactList.module.css';

export const ContactList = ({ list, deleteList, filter }) => {
  return (
    <>
      {list
        .filter(person => {
          return person.name.includes(filter);
        })
        .map(person => {
          return (
            <div key={person.id}>
              <p>{person.name}</p>
              <p>{person.number}</p>
              <button onClick={() => deleteList(person.id)}>Delete</button>
            </div>
          );
        })}
      <p className={s.list}>List</p>
    </>
  );
};

// export default function ContactList() {
//   return <div>ContactList</div>;
// }
