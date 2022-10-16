import React from 'react';
import { BsFillSunFill } from "react-icons/bs";

export const Forecast = ({ title }) => {
    return (
        <div>
            <div className='px-4 py-2'>
                <h1 className='border-b-2 border-slate-500 py-1'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <div className='text-xs text-center p-2'>
                        <p>08:45 AM</p>
                        <BsFillSunFill className='m-auto my-2' size={20}/>
                        <p>22°</p>
                    </div>
                    <div className='text-xs text-center p-2'>
                        <p>12:45 PM</p>
                        <BsFillSunFill  className='m-auto my-2' size={20}/>
                        <p>22°</p>
                    </div>
                    <div className='text-xs text-center p-2'>
                        <p>04:45 PM</p>
                        <BsFillSunFill  className='m-auto my-2' size={20}/>
                        <p>22°</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
