import React from 'react';
import Link from 'next/link';
import { ArrowBendUpLeft } from '@phosphor-icons/react';

export const GoBack = () => {
  return (
    <Link href='/'>
      <ArrowBendUpLeft size={60} color='black' />
    </Link>
  );
};
