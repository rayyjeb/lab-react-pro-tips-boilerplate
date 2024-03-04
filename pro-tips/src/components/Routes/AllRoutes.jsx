import React from 'react'
import Home from '../Home'
import Form from '../Form'
import PageNotFound from '../PageNotFound'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Contact'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </div>
  )
}

export default AllRoutes