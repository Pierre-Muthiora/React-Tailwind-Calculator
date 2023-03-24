/* eslint-disable no-eval */
import React, {useState} from 'react';
import {MdNetworkWifi, MdOutlineNetworkCell, MdNetworkLocked} from 'react-icons/md'
import {IoBatteryHalfSharp} from 'react-icons/io5'


function App() {
  const [calculation, setCalculation] = useState("");
  const [results, setResults] = useState("");

  const operators = ['/', '+', '-', '*', '.'];
  const updateCalculation = (value) => {
    if ((operators.includes(value) && calculation === "") || (operators.includes(value) && operators.includes(calculation.slice(-1))))
    {
      return;
    }
    setCalculation(calculation + value);

    if (!operators.includes(value)) {
      setResults(eval(calculation + value).toString());
    }
  };

  const equalsButton = () => {
    setCalculation(eval(calculation).toString());
    setResults(eval(calculation).toString()); 
  }
  const deleteButton = () => {
    if (calculation === '') {
      return;
    }
    const value = calculation.slice(0,-1);
    setCalculation(value);
  }
  const clearAllButton = () => {
    setCalculation("");
    setResults("");
  }


  const addZeroInTime = (digit) => {
    if (digit<10) {
      digit='0' + digit
    }
    return digit;
  }
  const date = new Date();
  let hours = addZeroInTime(date.getHours());
  let minutes = addZeroInTime(date.getMinutes());
  let time = hours + ':' + minutes;


  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      
      <section className='p-1 w-[215px] h-[378px] md:w-64 md:h-[450px] bg-black rounded-3xl'>

        <div className='h-full w-full rounded-3xl overflow-hidden bg-gradient-to-tr from-rose-400 via-fuchsia-700 to-fuchsia-900'>

          <div className='flex justify-between items-center bg-purple-900 rounded-t-3xl overflow-clip h-4 md:h-5'>
            <div className='text-white ml-5 text-xs'>
              {time}
            </div>
            <div className='flex mr-5 space-x-1'>
            <MdNetworkWifi size={12} className='text-white'/>
            <MdOutlineNetworkCell size={12} className='text-white'/>
            <MdNetworkLocked size={12} className='text-white'/>
            <IoBatteryHalfSharp size={14} className='text-white'/>
            </div>
          </div>

          <section className='flex flex-col justify-end items-end overflow-auto h-[106px] md:h-[140px]'>
            <div className='mr-2 mb-2'>
              <h1 className='font-semibold text-3xl md:text-5xl mb-2 md:mb-6 text-white'>{calculation || "0" } </h1>
              <p className='flex flex-row-reverse text-white md:text-xl'>{results ? <span>{results}</span> : "0"}</p>
            </div>
          </section>

          <section className='flex justify-between h-[200px] md:h-[232px]'>
            <div className='grid grid-cols-3 grid-rows-4 w-3/4 text-white md:text-3xl'>
              <button className='hover:opacity-25' onClick={() => updateCalculation('7')}>7</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('8')}>8</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('9')}>9</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('4')}>4</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('5')}>5</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('6')}>6</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('1')}>1</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('2')}>2</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('3')}>3</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('0')}>0</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('.')}>.</button>
              <button className='hover:opacity-25' onClick={equalsButton}>=</button>
            </div>

            <div className='grid grid-cols-1 grid-rows-5 w-1/4 text-white md:text-3xl'>
              <button className='md:text-2xl hover:opacity-25' onClick={deleteButton}>DEL</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('/')}>&divide;</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('*')}>x</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('-')}>-</button>
              <button className='hover:opacity-25' onClick={() => updateCalculation('+')}>+</button>
            </div>
          </section>              
                <button className='flex justify-center items-center h-[50px] w-full text-white font-bold md:text-2xl tracking-widest hover:opacity-25' onClick={clearAllButton}>AC</button>                     
        </div>

      </section>

    </div>
  );
}

export default App;
