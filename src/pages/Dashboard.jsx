import React, { useEffect, useState } from 'react'
import { Search } from '../components/Search'
import axios from 'axios'
import '../api/Weather.js'

export const Dashboard = () => {
  return (
    <div className='bg-[#F8FBFD] w-full'>
      <div className='flex'>
        <h1 className='py-8 px-4 text-4xl font-semibold '>Dashboard</h1>
        <Search/>
      </div>
    </div>
  )
}
