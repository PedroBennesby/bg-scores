import React, { useState } from 'react';
import { GoBack } from '@/components';
import Head from 'next/head';
import { NumberInput } from '@/components';

export default function Wingspan() {
  const [birds, setBirds] = useState(0);
  const [bonusCards, setBonusCards] = useState(0);
  const [objectives, setObjectives] = useState(0);
  const [eggs, setEggs] = useState(0);
  const [food, setFood] = useState(0);
  const [tuckedCards, setTuckedCards] = useState(0);
  const [score, setScore] = useState(0);

  const handleTextValues = (e, setValue) => {
    setValue(parseInt(e.target.value));
  };

  const calculateScore = () => {
    const totalScore = birds + bonusCards + objectives + eggs + food + tuckedCards;
    setScore(totalScore);
  };
  return (
    <>
      <Head>
        <title>Wingspan</title>
      </Head>
      <div className='px-10 mt-10'>
        <GoBack />

        <div className='flex flex-col mt-20 gap-20'>
          <NumberInput displayName='Pássaros' state={setBirds} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Cartas Bônus' state={setBonusCards} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Objetivos de Final de rodada' state={setObjectives} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Ovos' state={setEggs} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Comida nas Cartas' state={setFood} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Cartas Embaixo' state={setTuckedCards} onChangeFunction={handleTextValues} />
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Total:</h2>
          <h3 className='text-center mt-2 font-bold text-xl'>{score}</h3>
        </div>

        <button className='mt-20 bg-black text-white rounded-md p-5 text-xl font-bold w-full' onClick={calculateScore}>
          Calcular
        </button>
      </div>
    </>
  );
}
