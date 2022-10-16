import React from 'react'
import { CiTempHigh } from "react-icons/ci";
import { BsFillSunriseFill, BsFillSunsetFill, BsCloudSun } from "react-icons/bs";
import { Forecast } from './Forecast';


export const WeatherDetails = () => {
  return (
    <div>
      <div className='p-4 text-slate-100 bg-gradient-to-t from-[#153775] to-[#243B59] min-h-[100vh]'>
        <div className='flex items-center justify-between py-8'>
          <div>
            <h1 className='text-2xl font-semibold'>Itahari</h1>
            <p className='text-slate-400'>Sunsari, Nepal</p>
          </div>
          <div>
            <h2 className='text-xl'>12:52 PM</h2>
            <p className='text-slate-400'>Sunday, oct 16</p>
          </div>
        </div>
        <div className='p-4 text-center'>
          <p className='p-4'><BsCloudSun size={50} className="m-auto text-yellow-400" /></p>
          <h1 className=' text-center text-3xl'>Sunny</h1>
          <li className='p-4 text-xl text-center justify-center flex'><CiTempHigh size={30} /> 28°</li>
          <div className='flex items-center justify-center py-4'>

          </div>
        </div>
        <Forecast title='Hourly Forecast' />
        <Forecast title='Daily Forecast' />
        <div className='p-4'>
          <li className='p-4 my-2 bg-sky-900 text-xs list-none flex items-center justify-center rounded-md'>
            <BsFillSunriseFill className='m-2 text-yellow-400' size={20} />
            Rise : 05:45 AM
          </li>
          <li className='p-4 my-2 bg-sky-900 text-xs list-none flex items-center justify-center rounded-md'>
            <BsFillSunsetFill size={20} className="m-2 text-red-600" />
            Rise : 05:45 PM
          </li>
        </div>
      </div>
    </div>
  )
}
