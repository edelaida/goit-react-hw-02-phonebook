import React from 'react';
import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={s.blk}>
      <h4>Filter</h4>
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
