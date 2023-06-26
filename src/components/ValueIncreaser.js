import React, { useState } from 'react';

export const ValueIncreaser = ({ name, itemValue, handleDecrease, handleIncrease, state, displayName }) => {
  // const { name, itemValue, handleClick } = props;

  return (
    <>
      <div className='flex items-center gap-5'>
        <button className='bg-black text-white rounded-lg p-5' onClick={() => handleDecrease(name, 1, state)}>
          -
        </button>
        <div>
          <h3 className='text-xl font-bold text-center capitalize'>{displayName}</h3>
          <h4 className='text-2xl mt-2  text-center'>{itemValue}</h4>
        </div>
        <button className='bg-black text-white rounded-lg p-5' onClick={() => handleIncrease(name, 1, state)}>
          +
        </button>
      </div>
    </>
  );
};
