import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BsWind } from 'react-icons/bs';
import { TbTemperatureCelsius } from 'react-icons/tb';


export const Weather = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=ccfb17b8ae0b006e9c2c2ac65afc499d&units=metric')
            .then((response) => setApiData(response.data))
    }, [])
    console.log(apiData)
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <h1>weather</h1>
            <div className='grid grid-cols-3'>
                <div>
                    <TbTemperatureCelsius />
                    <p>{apiData?.main?.temp} C</p>
                </div>
                <div>
                    <BsWind />
                    <p>{apiData?.wind?.speed} Km/h</p>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
