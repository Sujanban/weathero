import React from 'react';
import { RiSettingsLine, RiQuestionLine,RiChat3Line } from "react-icons/ri";
import { MdStarOutline, MdOutlineSpaceDashboard } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className='h-[100vh] bg-white flex justify-between flex-col w-[13rem]'>
      <div className=' '>
        {/* <li className='p-8 list-none'>
          <Link to="/" className='text-2xl text-blue-800 font-semibold'>Weathero</Link>
        </li> */}
        <li className=' list-none py-2 pt-8'>
          <Link to="/" className='pl-4 font-semibold bg-white flex items-center  border-r-4 text-blue-600 border-blue-600'><MdOutlineSpaceDashboard size={24} className='m-2' />Dashboard</Link>
        </li>
        <li className='list-none py-2'>
          <Link to="/counter" className='pl-4  hover:bg-gray-100 flex items-center text-slate-500'><BsArrowCounterclockwise size={24} className='m-2' />Counter</Link>
        </li>
        <li className='list-none py-2'>
          <Link to="/weather" className='pl-4  hover:bg-gray-100 flex items-center text-slate-500'><TiWeatherCloudy size={24} className='m-2' />Weather</Link>
        </li>
        <li className='list-none py-2'>
          <Link to="/favourate" className='pl-4  hover:bg-gray-100 flex items-center text-slate-500'><MdStarOutline size={24} className='m-2' />Watchlist</Link>
        </li>
        <li className='list-none py-2'>
          <Link to="/favourate" className='pl-4  hover:bg-gray-100 flex items-center text-slate-500'><RiSettingsLine size={24} className='m-2' />Setting</Link>
        </li>
      </div>


      <div>
        <li className='list-none py-2'>
          <Link to="/about" className='pl-4  hover:bg-gray-100 flex items-center text-slate-500 '><RiQuestionLine size={24} className='m-2' />About</Link>
        </li>
        <li className='list-none py-2'>
          <Link to="/contact" className='pl-4  hover:bg-gray-100 flex items-center text-slate-500 '><RiChat3Line size={24} className='m-2' />Contact</Link>
        </li>
        <p className='p-4 border-t-2 border-gray-400 text-sm text-slate-500'>Dev by <br /> <a href="" className='text-blue-600'>Sujan Ban</a></p>
      </div>
    </div>
  )
}
