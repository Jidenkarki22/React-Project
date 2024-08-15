import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard'
import Error404Page from '../components/Error/Error404Page'
import ProtectedRoute from './ProtectedRoute'
import OpenRoute from './OpenRoute'
import MovieDetails from '../Pages/MovieDetails'

const MainRoutes = () => {
  return (
    <div style={{minHeight:'100vh' , minWidth:'100vw'}}>
    <Routes>
      <Route element={<OpenRoute/>}>
        <Route path='' element={<Authentication />} />
        </Route>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/movie/:id' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>} />
        <Route path='*' element={<Error404Page />} />
    </Routes>
    </div>
  )
}

export default MainRoutes