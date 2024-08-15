import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Partials/Navbar'
import PopularMovies from '../PopularMovies'

const Dashboard = () => {

  return (
    <div>
      <Navbar/>
      <PopularMovies />
    </div>
  )
}

export default Dashboard