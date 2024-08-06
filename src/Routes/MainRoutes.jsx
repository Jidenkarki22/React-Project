import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard'
import Error404Page from '../components/Error/Error404Page'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Authentication />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error404Page />} />
    </Routes>
  )
}

export default MainRoutes
