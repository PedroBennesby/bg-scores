import React from 'react';

export const NumberInput = ({ displayName, state, onChangeFunction }) => {
  return (
    <div>
      <h2 className='font-bold text-2xl mt-20'>{displayName}:</h2>
      <div className='flex items-center mt-2 text-2xl'>
        <input placeholder='Clique para editar' type='number' onChange={(e) => onChangeFunction(e, state)} className='bg-black text-white p-2' />
      </div>
    </div>
  );
};
