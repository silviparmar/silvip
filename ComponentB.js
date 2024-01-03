// ComponentB.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from './action';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(updateValue(value));
  };

  return (
    <div>
      <h2>Component B</h2>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
