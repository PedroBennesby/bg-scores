import React, { useState } from 'react';
import Head from 'next/head';
import { GoBack, NumberInput, ValueIncreaser } from '@/components';

export default function Agricola() {
  const [fields, setFields] = useState({
    campo: 0,
    pasto: 0,
    vazios: 0,
  });
  const [rooms, setRooms] = useState({
    argila: 0,
    pedra: 0,
  });

  const [family, setFamily] = useState(0);

  const [farm, setFarm] = useState({
    graos: 0,
    legumes: 0,
  });

  const [animals, setAnimals] = useState({
    ovelhas: 0,
    javalis: 0,
    vacas: 0,
  });

  const [stables, setStables] = useState(0);

  const [misc, setMisc] = useState({
    cartas: 0,
    bonus: 0,
    begging: 0,
  });

  const [score, setScore] = useState(0);

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

  const handleSingleValueIncreaser = (name, value, setValue) => {
    setValue(name + value);
  };

  const handleSingleValueDecreaser = (name, value, setValue) => {
    setValue(name - value);
  };

  const calculateScore = () => {
    let fieldsScore = 0;
    let pasturesScore = 0;
    let grainScore = 0;
    let veggieScore = 0;
    let SheepScore = 0;
    let BoarScore = 0;
    let CattleScore = 0;

    if (fields.campo <= 1) {
      fieldsScore = -1;
    } else if (fields.campo === 2) {
      fieldsScore = 1;
    } else if (fields.campo === 3) {
      fieldsScore = 2;
    } else if (fields.campo === 4) {
      fieldsScore = 3;
    } else if (fields.campo >= 5) {
      fieldsScore = 4;
    }

    if (fields.pasto <= 1) {
      pasturesScore = -1;
    } else if (fields.pasto === 2) {
      pasturesScore = 1;
    } else if (fields.pasto === 3) {
      pasturesScore = 2;
    } else if (fields.pasto === 4) {
      pasturesScore = 3;
    } else if (fields.pasto >= 5) {
      pasturesScore = 4;
    }

    if (farm.graos === 0) {
      grainScore = -1;
    } else if (farm.graos === 1) {
      grainScore = 1;
    } else if (farm.graos > 1 && farm.graos <= 4) {
      grainScore = 2;
    } else if (farm.graos > 4 && farm.graos <= 7) {
      grainScore = 3;
    } else if (farm.graos >= 8) {
      grainScore = 4;
    }

    if (farm.legumes === 0) {
      veggieScore = -1;
    } else if (farm.legumes === 1) {
      veggieScore = 1;
    } else if (farm.legumes === 2) {
      veggieScore = 2;
    } else if (farm.legumes === 3) {
      veggieScore = 3;
    } else if (farm.legumes >= 4) {
      veggieScore = 4;
    }

    if (animals.ovelhas === 0) {
      SheepScore = -1;
    } else if (animals.ovelhas > 1 && animals.ovelhas <= 3) {
      SheepScore = 1;
    } else if (animals.ovelhas > 4 && animals.ovelhas <= 5) {
      SheepScore = 2;
    } else if (animals.ovelhas > 6 && animals.ovelhas <= 7) {
      SheepScore = 3;
    } else if (animals.ovelhas >= 8) {
      SheepScore = 4;
    }

    if (animals.javalis === 0) {
      BoarScore = -1;
    } else if (animals.javalis > 1 && animals.javalis <= 2) {
      BoarScore = 1;
    } else if (animals.javalis > 3 && animals.javalis <= 4) {
      BoarScore = 2;
    } else if (animals.javalis > 5 && animals.javalis <= 6) {
      BoarScore = 3;
    } else if (animals.javalis >= 7) {
      BoarScore = 4;
    }

    if (animals.vacas === 0) {
      CattleScore = -1;
    } else if (animals.vacas === 1) {
      CattleScore = 1;
    } else if (animals.vacas > 2 && animals.vacas <= 3) {
      CattleScore = 2;
    } else if (animals.vacas > 4 && animals.vacas <= 5) {
      CattleScore = 3;
    } else if (animals.vacas >= 6) {
      CattleScore = 4;
    }

    const emptyFields = fields.vazios * -1;

    const argilaRooms = rooms.argila * 1;

    const pedraRooms = rooms.pedra * 2;

    const familyScore = family * 3;

    const stableScore = stables * 1 <= 4 ? stables * 1 : 4;

    const miscScore = misc.cartas + misc.bonus + misc.begging * -3;

    const totalScore = fieldsScore + pasturesScore + grainScore + veggieScore + SheepScore + BoarScore + CattleScore + emptyFields + argilaRooms + pedraRooms + familyScore + stableScore + miscScore;
    console.log(fieldsScore, pasturesScore, grainScore, veggieScore);

    setScore(totalScore);
  };
  console.log(fields, rooms, family, farm, animals, stables, misc);

  return (
    <>
      <Head>
        <title>Agricola</title>
      </Head>
      <div className='px-10 pt-10'>
        <GoBack />

        <div className='flex mt-20 flex-col'>
          <div className=' text-2xl'>
            <h2 className='font-bold'>Campos e Pastos:</h2>
            <div className='flex gap-20 flex-col mt-11'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Campos' name='campo' itemValue={fields.campo} state={setFields} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Pastos' name='pasto' itemValue={fields.pasto} state={setFields} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Espaços Vazios' name='vazios' itemValue={fields.vazios} state={setFields} />
            </div>
          </div>
          <div className='text-2xl mt-20'>
            <h2 className='font-bold'>Construções e Pessoas:</h2>
            <div className='flex gap-20 flex-col mt-11'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Quartos de Argila' name='argila' itemValue={rooms.argila} state={setRooms} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Quartos de Pedra' name='pedra' itemValue={rooms.pedra} state={setRooms} />
              <ValueIncreaser handleDecrease={handleSingleValueDecreaser} handleIncrease={handleSingleValueIncreaser} displayName='Estábulos' name='stables' itemValue={stables} state={setStables} singleValue />
              <ValueIncreaser handleDecrease={handleSingleValueDecreaser} handleIncrease={handleSingleValueIncreaser} displayName='Membros da Família' name='family' itemValue={family} state={setFamily} singleValue />
            </div>
          </div>

          <div className='text-2xl mt-20'>
            <h2 className='font-bold'>Grãos e Vegetais:</h2>
            <div className='flex gap-20 flex-col mt-11'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Cereais' name='graos' itemValue={farm.graos} state={setFarm} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Legumes' name='legumes' itemValue={farm.legumes} state={setFarm} />
            </div>
          </div>

          <div className='text-2xl mt-20'>
            <h2 className='font-bold'>Animais:</h2>
            <div className='flex gap-20 flex-col mt-11'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Ovelhas' name='ovelhas' itemValue={animals.ovelhas} state={setAnimals} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Javalis' name='javalis' itemValue={animals.javalis} state={setAnimals} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Vacas' name='vacas' itemValue={animals.vacas} state={setAnimals} />
            </div>
          </div>

          <div className='text-2xl mt-20'>
            <h2 className='font-bold'>Diversos:</h2>
            <div className='flex gap-20 flex-col mt-11'>
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Cartas' name='cartas' itemValue={misc.cartas} state={setMisc} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Bônus' name='bonus' itemValue={misc.bonus} state={setMisc} />
              <ValueIncreaser handleDecrease={handleValueDecreaser} handleIncrease={handleValueIncreaser} displayName='Tokens de Mendicância' name='begging' itemValue={misc.begging} state={setMisc} />
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
    </>
  );
}
