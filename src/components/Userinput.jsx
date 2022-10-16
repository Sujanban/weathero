import React from 'react'
import {HiOutlineLocationMarker,HiSearch} from 'react-icons/hi'
import { useState } from 'react';

export const Userinput = () => {
  const API_KEY = 'ccfb17b8ae0b006e9c2c2ac65afc499d';
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('');

  const getWeater = (e)=>{
if(e.key == 'Enter'){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
    setWeatherData(data); 
  setCity('')
  }
  )
  .catch((err) => console.log(err))
}
  }
  return (
    <div className=' py-8 flex justify-center items-center w-full'>
        <div className='flex justify-center items-center w-full'>
            <input 
            placeholder='search for city'
            type="text" 
            className='border p-2 capitalize focus:outline-none shadow-md w-full'
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeater}
            />
            <HiSearch 
            size={25} 
            className='mx-3 text-gray-500 cursor-pointer'
            onClick={e => setCity(e.target.value)}
            />
            <HiOutlineLocationMarker 
            size={25} 
            className='mx-3 text-gray-500 cursor-pointer'
            />
        </div>
        <div className='flex justify-center items-center text-xl w-1/4 text-gray-500'>
            <button className='p-2 cursor-pointer'>°C</button>
            <p>|</p>
            <button className='p-2 cursor-pointer'>°F</button>
        </div>

<p>{weatherData.name}
  </p>

    </div>
  )
}
