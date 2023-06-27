import React, { useState } from 'react';
import { GoBack } from '@/components';
import Head from 'next/head';
import { NumberInput, ValueIncreaser } from '@/components';

export default function Gwt() {
  const [dollars, setDollars] = useState(0);
  const [construction, setConstruction] = useState(0);
  const [citySeals, setCitySeals] = useState(0);
  const [trainStations, setTrainStations] = useState(0);
  const [dangerTiles, setDangerTiles] = useState(0);
  const [cows, setCows] = useState(0);
  const [objectiveCards, setObjectiveCards] = useState(0);
  const [stationMasters, setStationMasters] = useState(0);
  const [workers, setWorkers] = useState(0);
  const [playerBoard, setPlayerBoard] = useState(false);
  const [marketTile, setMarketTile] = useState(false);
  const [score, setScore] = useState(0);

  const handleTextValues = (e, setValue) => {
    setValue(parseInt(e.target.value));
  };

  const handleValueIncreaser = (name, value, setValue) => {
    setValue(name + value);
  };

  const handleValueDecreaser = (name, value, setValue) => {
    setValue(name - value);
  };

  const handleBonus = (name) => {
    name === 'playerBoard' ? setPlayerBoard(!playerBoard) : setMarketTile(!marketTile);
  };

  const calculateScore = () => {
    const totalScore = dollars + construction + citySeals + trainStations + dangerTiles + cows + objectiveCards + stationMasters + workers + (playerBoard ? 3 : 0) + (marketTile ? 2 : 0);

    setScore(totalScore);
  };

  console.log(marketTile);

  return (
    <>
      <Head>
        <title>Great Western Trail</title>
      </Head>
      <div className='px-10 mt-10'>
        <GoBack />

        <div className='flex flex-col mt-20 gap-20'>
          <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='5 Dólares' name='dollars' itemValue={dollars} state={setDollars} singleValue />

          <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Trabalhadores' name='workers' itemValue={workers} incrementValue={4} state={setWorkers} singleValue />

          <NumberInput displayName='Construções' state={setConstruction} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Selos de Cidade' state={setCitySeals} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Estações de Trem' state={setTrainStations} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Fichas de Perigo' state={setDangerTiles} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Gado' state={setCows} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Objetivos' state={setObjectiveCards} onChangeFunction={handleTextValues} />
          <NumberInput displayName='Tarefas Individuais' state={setStationMasters} onChangeFunction={handleTextValues} />

          <h2 className='font-bold text-2xl mt-20'>Bônus:</h2>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-10'>
              <span>PV tabuleiro pessoal:</span>
              <input type='checkbox' onClick={() => handleBonus('playerBoard')} />
            </div>
            <div className='flex items-center gap-10'>
              <span>Ficha de mercado de trabalho:</span>
              <input type='checkbox' onClick={handleBonus} />
            </div>
          </div>
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
