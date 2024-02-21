import React from 'react';
import s from './ContactList.module.css';

export const ContactList = ({ list, onDeleteList }) => {
  return (
    <ul className={s.list}>
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
  );
};
