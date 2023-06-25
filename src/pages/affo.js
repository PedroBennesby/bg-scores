import React, { useState } from 'react';
import { ArrowBendUpLeft } from '@phosphor-icons/react';

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

  // const handleShipValues = (name) => {
  //   setShips((prev) => ({
  //     ...prev,
  //     name: prev.name - 1,
  //   }));
  // };

  const handleIslandValue = (e) => {
    setIsland(parseInt(e.target.value));
  };

  const handleOccupationValue = (e) => {
    setOccupations(parseInt(e.target.value));
  };

  const handleCoinsValue = (e) => {
    setCoins(parseInt(e.target.value));
  };

  const handleFinalIncomeValue = (e) => {
    setFinalIncome(parseInt(e.target.value));
  };

  const handleNegativePointsValue = (e) => {
    setNegativePoints(parseInt(e.target.value));
  };

  const calculateScore = () => {
    const shipsScore = ships.baleeiro * 3 + ships.knarr * 5 + ships.dracar * 8;
    const immigrationScore = immigration.knarr * 18 + immigration.dracar * 21;
    const cabinsScore = cabins.cabin * 8 + cabins.stoneHouse * 10 + cabins.longHouse * 17;
    const animalsScore = animals.sheep * 2 + animals.pregnantSheep * 3 + animals.cow * 3 + animals.pregnantCow * 4;

    console.log(shipsScore, immigrationScore, parseInt(island), cabinsScore, animalsScore, parseInt(occupations), parseInt(coins), parseInt(finalIncome), parseInt(negativePoints));
    const totalScore = shipsScore + immigrationScore + parseInt(island) + cabinsScore + animalsScore + parseInt(occupations) + parseInt(coins) + parseInt(finalIncome) - parseInt(negativePoints);
    setScore(totalScore);
  };

  // console.log(ships, immigration, island, cabins, animals, occupations, coins, finalIncome, negativePoints);
  console.log(score);
  return (
    <div className='px-10 pt-10'>
      <a href='/'>
        <ArrowBendUpLeft size={60} color='black' />
      </a>

      <div className='flex mt-20 flex-col'>
        <div className=' text-2xl'>
          <h2 className='font-bold'>Navios:</h2>
          <div className='flex gap-20 flex-col mt-11 items-center'>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setShips((prev) => ({
                    ...prev,
                    baleeiro: prev.baleeiro - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Baleeiro</h3>
                <h4 className='text-2xl mt-2  text-center'>{ships.baleeiro}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setShips((prev) => ({
                    ...prev,
                    baleeiro: prev.baleeiro + 1,
                  }))
                }>
                +
              </button>
            </div>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setShips((prev) => ({
                    ...prev,
                    knarr: prev.knarr - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Knarr</h3>
                <h4 className='text-2xl mt-2 text-center'>{ships.knarr}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setShips((prev) => ({
                    ...prev,
                    knarr: prev.knarr + 1,
                  }))
                }>
                +
              </button>
            </div>{' '}
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setShips((prev) => ({
                    ...prev,
                    dracar: prev.dracar - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Dracar</h3>
                <h4 className='text-2xl mt-2  text-center'>{ships.dracar}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setShips((prev) => ({
                    ...prev,
                    dracar: prev.dracar + 1,
                  }))
                }>
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Imigração:</h2>
          <div className='flex gap-20 flex-col mt-11 items-center'>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setImmigration((prev) => ({
                    ...prev,
                    knarr: prev.knarr - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Knarr</h3>
                <h4 className='text-2xl mt-2 text-center'>{immigration.knarr}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setImmigration((prev) => ({
                    ...prev,
                    knarr: prev.knarr + 1,
                  }))
                }>
                +
              </button>
            </div>{' '}
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setImmigration((prev) => ({
                    ...prev,
                    dracar: prev.dracar - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Dracar</h3>
                <h4 className='text-2xl mt-2  text-center'>{immigration.dracar}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setImmigration((prev) => ({
                    ...prev,
                    dracar: prev.dracar + 1,
                  }))
                }>
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Exploração:</h2>
          <div className='flex items-center mt-2 text-2xl'>
            <input placeholder='Clique para editar' type='number' onChange={(e) => handleIslandValue(e)} className='bg-black text-white p-2' />
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Cabanas e Casas:</h2>
          <div className='flex gap-20 flex-col mt-11 items-center'>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setCabins((prev) => ({
                    ...prev,
                    cabin: prev.cabin - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Cabana</h3>
                <h4 className='text-2xl mt-2  text-center'>{cabins.cabin}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setCabins((prev) => ({
                    ...prev,
                    cabin: prev.cabin + 1,
                  }))
                }>
                +
              </button>
            </div>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setCabins((prev) => ({
                    ...prev,
                    stoneHouse: prev.stoneHouse - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Casa de Pedra</h3>
                <h4 className='text-2xl mt-2  text-center'>{cabins.stoneHouse}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setCabins((prev) => ({
                    ...prev,
                    stoneHouse: prev.stoneHouse + 1,
                  }))
                }>
                +
              </button>
            </div>{' '}
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setCabins((prev) => ({
                    ...prev,
                    longHouse: prev.longHouse - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Casa Longa</h3>
                <h4 className='text-2xl mt-2  text-center'>{cabins.longHouse}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setCabins((prev) => ({
                    ...prev,
                    longHouse: prev.longHouse + 1,
                  }))
                }>
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Animais:</h2>
          <div className='flex gap-20 flex-col mt-11 items-center'>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setAnimals((prev) => ({
                    ...prev,
                    sheep: prev.sheep - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Ovelha</h3>
                <h4 className='text-2xl mt-2  text-center'>{animals.sheep}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setAnimals((prev) => ({
                    ...prev,
                    sheep: prev.sheep + 1,
                  }))
                }>
                +
              </button>
            </div>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setAnimals((prev) => ({
                    ...prev,
                    pregnantSheep: prev.pregnantSheep - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Ovelha Prenhe</h3>
                <h4 className='text-2xl mt-2  text-center'>{animals.pregnantSheep}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setAnimals((prev) => ({
                    ...prev,
                    pregnantSheep: prev.pregnantSheep + 1,
                  }))
                }>
                +
              </button>
            </div>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setAnimals((prev) => ({
                    ...prev,
                    cow: prev.cow - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Vaca</h3>
                <h4 className='text-2xl mt-2  text-center'>{animals.cow}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setAnimals((prev) => ({
                    ...prev,
                    cow: prev.cow + 1,
                  }))
                }>
                +
              </button>
            </div>
            <div className='flex items-center gap-5'>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setAnimals((prev) => ({
                    ...prev,
                    pregnantCow: prev.pregnantCow - 1,
                  }))
                }>
                -
              </button>
              <div>
                <h3 className='text-xl font-bold text-center'>Vaca Prenhe</h3>
                <h4 className='text-2xl mt-2  text-center'>{animals.pregnantCow}</h4>
              </div>
              <button
                className='bg-black text-white rounded-lg p-5'
                onClick={() =>
                  setAnimals((prev) => ({
                    ...prev,
                    pregnantCow: prev.pregnantCow + 1,
                  }))
                }>
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Ocupações:</h2>
          <div className='flex items-center mt-2 text-2xl'>
            <input placeholder='Clique para editar' type='number' onChange={(e) => handleOccupationValue(e)} className='bg-black text-white p-2' />
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Prata:</h2>
          <div className='flex items-center mt-2 text-2xl'>
            <input placeholder='Clique para editar' type='number' onChange={(e) => handleCoinsValue(e)} className='bg-black text-white p-2' />
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Renda Final:</h2>
          <div className='flex items-center mt-2 text-2xl'>
            <input placeholder='Clique para editar' type='number' onChange={(e) => handleFinalIncomeValue(e)} className='bg-black text-white p-2' />
          </div>
        </div>

        <span></span>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Pontos Negativos:</h2>
          <div className='flex items-center mt-2 text-2xl'>
            <input placeholder='Clique para editar' type='number' onChange={(e) => handleNegativePointsValue(e)} className='bg-black text-white p-2' />
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl mt-20'>Total:</h2>
          <h3 className='text-center mt-2 font-bold text-xl'>{score}</h3>
        </div>

        <button className='mt-20 bg-black text-white rounded-md p-5 text-xl font-bold' onClick={calculateScore}>
          Calcular
        </button>
      </div>
    </div>
  );
}
