import React from 'react';
import s from './ContactList.module.css';

export const ContactList = ({ list, onDeleteList }) => {
  return (
    <div>
      <h2 className={s.title}>Contakt list</h2>
      <ul>
        {list.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.text}>{name}</p>
            <p className={s.text}>{number}</p>
            <button className={s.btnn} onClick={() => onDeleteList(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
