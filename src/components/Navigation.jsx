import React from 'react';
import { RiHomeLine,RiQuestionLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const Navigation = () => {
  return (
    <div className='h-[100vh] bg-[#EEF2F3] p-4 flex justify-between flex-col'>
      <div>
        <li className='p-8 list-none'>
          <a href="" className='font-bold text-2xl text-blue-800'>Weathero</a>
        </li>
        <li className=' list-none '>
          <a href="" className='p-2 bg-white  rounded-md text-xl flex items-center  text-blue-900'><RiHomeLine className='m-2'/>Dashboard</a>
        </li>
        <li className='list-none'>
          <a href="" className='p-2 hover:bg-white  rounded-md text-xl flex items-center text-slate-500 hover:text-blue-900'><MdOutlineFavoriteBorder className='m-2'/>Favourate</a>
        </li>
        <li className='list-none'>
          <a href="" className='p-2 hover:bg-white  rounded-md text-xl flex items-center text-slate-500 hover:text-blue-900'><RiQuestionLine className='m-2'/>About</a>
        </li>
      </div>
      <div>
          <p className='p-4 text-sm text-slate-500'>Designed and Developed by <br/> <a href="" className='text-blue-900'>Sujan Ban</a></p>
      </div>
    </div>
  )
}
