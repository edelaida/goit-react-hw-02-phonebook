import React from 'react';
import s from './Filter.modules.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p>Filter</p>
      <input
        className={s.fltr}
        value={value}
        name="filter"
        type="text"
        onChange={onChange}
      />
    </div>
  );
};
