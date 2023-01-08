import React, { useState } from 'react'

export const Weather = () => {
    const unit = 'metric';
    const API_KEY = 'ccfb17b8ae0b006e9c2c2ac65afc499d';
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState('kathmandu');

    const getWeater = (e) => {
        if (e.key == 'Enter') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`).then((response) => response.json()).then((data) => {
                setWeatherData(data);
                setCity('')
            }
            )
                .catch((err) => console.log(err))
        }
    }
    return (
        <div>Weather</div>
    )
}
