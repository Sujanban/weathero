import React,{useState} from 'react';

export const Counter = () => {
  const [count,setCount] = useState(0);
  return (
    <div className=' w-full p-8 h-screen flex justify-center items-center text-5xl'>
      <div>
        <button 
        className='p-4 border rounded shadow'
        onClick={() => setCount(count - 1)}
        >-</button>
        <span className='p-4 '>{count}</span>
        <button 
        className='p-4 border rounded shadow'
    onClick={() => setCount(count + 1)}
        >+</button>
      </div>
    </div>
  )
}
