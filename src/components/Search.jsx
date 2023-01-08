import React from 'react';
import { HiOutlineLocationMarker, HiSearch } from 'react-icons/hi';

export const Search = ({getWeater ,weatherData, setCity, city}) => {
  return (
    <div className='flex mx-4 justify-center w-full'>
      <div className='flex items-center '>
        <input
          placeholder='search for city'
          type="text"
          className='border rounded-full px-4 py-2 capitalize focus:outline-none shadow hover:shadow-md transition  w-[448px] bg-gradient-to-b from-white to-gray-50'
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeater}
        />
        <HiSearch
          size={25}
          className='mx-3 text-gray-500 cursor-pointer'
          onClick={e => 
            {
              setCity(e.target.value);
            }
          }
        />
      </div>

    </div>
  )
}
