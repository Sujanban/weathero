import React from 'react'

export const Favcity = () => {
    const favCity = [
        {
            'id': 1,
            'name': 'Kathmandu'
        },
        {
            'id': 2,
            'name': 'Delhi'
        },
        {
            'id': 3,
            'name': 'New York'
        },
        {
            'id': 4,
            'name': 'Doha'
        },
        {
            'id': 5,
            'name': 'Sydney'
        },
    ];
  return (
    <div className='flex space-x-8 justify-center items-center px-16 py-8'>
        {favCity.map((city)=>(
            <button 
            className='space-x-2 font-semibold text-blue-600'
            key={city.id}
            >
                {city.name}
            </button>
        ))
        }
    </div>
  )
}
