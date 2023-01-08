import React from 'react'

export const Favourate = (props) => {
  return (
    <div className='w-full bg-[#F8FBFD] p-8'>
      <h1 className='text-4xl font-semibold '>Favourate</h1>
      <p>my name is {props.name}</p>
    </div>
  )
}
