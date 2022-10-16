import React from 'react';
import { BiWind, BiCloudLightRain } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { RiExternalLinkLine } from "react-icons/ri";

export const TodayOverview = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl text-gray-800 p-4 font-semibold'>Today overview</h2>
                    <p className='flex items-center text-blue-400'>More details<RiExternalLinkLine/></p>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div className='p-4 flex items-center shadow-md hover:shadow-xl transition duration-200 ease-in-out'>
                        <CiTempHigh size={70} className='mx-4 text-blue-500' />
                        <div className=''>
                            <p className='text-gray-400'>Temperature</p>
                            <h1 className='text-2xl font-semibold py-2 text-slate-6s00'>28°</h1>
                        </div>
                    </div>
                    <div className='p-4 flex items-center shadow-md hover:shadow-xl transition duration-200 ease-in'>
                        <BiCloudLightRain size={70} className='mx-4 text-blue-500' />
                        <div>
                            <p className='text-gray-400'>Rain</p>
                            <h1 className='text-2xl font-semibold py-2 text-slate-6s00'>22%</h1>
                        </div>
                    </div>
                    <div className='p-4 flex items-center shadow-md hover:shadow-xl transition duration-200 ease-in'>
                        <WiHumidity size={70} className='mx-4 text-blue-500' />
                        <div>
                            <p className='text-gray-400'>Humidity</p>
                            <h1 className='text-2xl font-semibold py-2 text-slate-6s00'>57%</h1>
                        </div>
                    </div>
                    <div className='p-4 flex items-center shadow-md hover:shadow-xl transition duration-200 ease-in'>
                        <BiWind size={70} className='mx-4 text-blue-500' />
                        <div className='mx-4'>
                            <p className='text-gray-400'>Wind Speed</p>
                            <h1 className='text-2xl font-semibold py-2 text-slate-6s00'>12Km/h</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
