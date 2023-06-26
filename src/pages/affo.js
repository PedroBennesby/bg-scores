import React, { useState } from 'react';
import { ArrowBendUpLeft } from '@phosphor-icons/react';
import Link from 'next/link';
import { NumberInput, ValueIncreaser } from '@/components';
import Head from 'next/head';

export default function Affo() {
  const [score, setScore] = useState(0);
  const [ships, setShips] = useState({
    baleeiro: 0,
    knarr: 0,
    dracar: 0,
  });
  const [immigration, setImmigration] = useState({
    knarr: 0,
    dracar: 0,
  });
  const [island, setIsland] = useState(0);
  const [cabins, setCabins] = useState({
    cabin: 0,
    stoneHouse: 0,
    longHouse: 0,
  });
  const [animals, setAnimals] = useState({
    sheep: 0,
    pregnantSheep: 0,
    cow: 0,
    pregnantCow: 0,
  });
  const [occupations, setOccupations] = useState(0);
  const [coins, setCoins] = useState(0);
  const [finalIncome, setFinalIncome] = useState(0);
  const [negativePoints, setNegativePoints] = useState(0);

  const handleTextValues = (e, setValue) => {
    setValue(parseInt(e.target.value));
  };

  const handleValueIncreaser = (name, value, setValue) => {
    setValue((prev) => ({
      ...prev,
      [name]: prev[name] + value,
    }));
  };

  const handleValueDecreaser = (name, value, setValue) => {
    setValue((prev) => ({
      ...prev,
      [name]: prev[name] - value,
    }));
  };

  const calculateScore = () => {
    const shipsScore = ships.baleeiro * 3 + ships.knarr * 5 + ships.dracar * 8;
    const immigrationScore = immigration.knarr * 18 + immigration.dracar * 21;
    const cabinsScore = cabins.cabin * 8 + cabins.stoneHouse * 10 + cabins.longHouse * 17;
    const animalsScore = animals.sheep * 2 + animals.pregnantSheep * 3 + animals.cow * 3 + animals.pregnantCow * 4;

    const totalScore = shipsScore + immigrationScore + parseInt(island) + cabinsScore + animalsScore + parseInt(occupations) + parseInt(coins) + parseInt(finalIncome) - parseInt(negativePoints);

    setScore(totalScore);
  };

  return (
    <>
      <Head>
        <title>Um banquete para Odin</title>
      </Head>
      <div className='px-10 pt-10'>
        <Link href='/'>
          <ArrowBendUpLeft size={60} color='black' />
        </Link>

        <div className='flex mt-20 flex-col'>
          <div className=' text-2xl'>
            <h2 className='font-bold'>Navios:</h2>
            <div className='flex gap-20 flex-col mt-11 items-center'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='baleeiro' name='baleeiro' itemValue={ships.baleeiro} state={setShips} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='knarr' name='knarr' itemValue={ships.knarr} state={setShips} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='dracar' name='dracar' itemValue={ships.dracar} state={setShips} />
            </div>
          </div>

          <div>
            <h2 className='font-bold text-2xl mt-20'>Imigração:</h2>
            <div className='flex gap-20 flex-col mt-11 items-center'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='knarr' name='knarr' itemValue={immigration.knarr} state={setImmigration} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='dracar' name='dracar' itemValue={immigration.dracar} state={setImmigration} />
            </div>
          </div>

          <NumberInput displayName='Exploração' state={setIsland} onChangeFunction={handleTextValues} />

          <div>
            <h2 className='font-bold text-2xl mt-20'>Cabanas e Casas:</h2>
            <div className='flex gap-20 flex-col mt-11 items-center'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Cabana' name='cabin' itemValue={cabins.cabin} state={setCabins} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Casa de Pedra' name='stoneHouse' itemValue={cabins.stoneHouse} state={setCabins} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Casa Longa' name='longHouse' itemValue={cabins.longHouse} state={setCabins} />
            </div>
          </div>

          <div>
            <h2 className='font-bold text-2xl mt-20'>Animais:</h2>
            <div className='flex gap-20 flex-col mt-11 items-center'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Ovelha' name='sheep' itemValue={animals.sheep} state={setAnimals} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Ovelha Prenhe' name='pregnantSheep' itemValue={animals.pregnantSheep} state={setAnimals} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Vaca' name='cow' itemValue={animals.cow} state={setAnimals} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Vaca Prenhe' name='pregnantCow' itemValue={animals.pregnantCow} state={setAnimals} />
            </div>
          </div>

          <NumberInput displayName='Ocupações' state={setOccupations} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Prata' state={setCoins} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Renda Final' state={setFinalIncome} onChangeFunction={handleTextValues} />
          <span className='divide-y divide-black' />
          <NumberInput displayName='Pontos Negativos' state={setNegativePoints} onChangeFunction={handleTextValues} />

          <div>
            <h2 className='font-bold text-2xl mt-20'>Total:</h2>
            <h3 className='text-center mt-2 font-bold text-xl'>{score}</h3>
          </div>

          <button className='mt-20 bg-black text-white rounded-md p-5 text-xl font-bold' onClick={calculateScore}>
            Calcular
          </button>
        </div>
      </div>
    </>
  );
}
