import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const TemperatureHistory = () => {

    const data = [
        {
            month: 'Jan',
            temperature: 22
        },
        {
            month: 'Feb',
            temperature: 20
        },
        {
            month: 'Mar',
            temperature: 17
        },
        {
            month: 'Apr',
            temperature: 21
        },
        {
            month: 'May',
            temperature: 20
        },
        {
            month: 'Jun',
            temperature: 19
        },
        {
            month: 'Jul',
            temperature: 22
        },
        {
            month: 'Aug',
            temperature: 12
        },
        {
            month: 'Sep',
            temperature: 22
        },
        {
            month: 'Oct',
            temperature: 12
        },
        {
            month: 'Nov',
            temperature: 22
        },
        {
            month: 'Dec',
            temperature: 15
        },
    ];
    return (
        <div>
            <div className='w-full'>
                <h2 className='text-xl text-gray-800 p-4 py-8 font-semibold'>Daily Temperature History</h2>
                <div>
                    <ResponsiveContainer width="100%" aspect={16 / 5}>
                        <LineChart data={data}>
                            <Tooltip />
                            <XAxis dataKey="month" name='month' />
                            <YAxis />
                            <Line type="monotone" dataKey="temperature" name='temperature' stroke="blue" strokeWidth={2}/>
                            <Tooltip />
                            <Legend></Legend>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
