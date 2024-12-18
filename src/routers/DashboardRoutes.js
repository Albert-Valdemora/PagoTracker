import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { PagoTrackerScreen } from '../components/screens/PagoTrackerScreen'




export const DashboardRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="container">

        <Routes>
          <Route path='marvel' ></Route>
          <Route path='dc' ></Route>
          <Route path='search' ></Route>
          <Route path='hero/:heroeId'></Route>

          <Route path='/' element={<PagoTrackerScreen />}></Route>

        </Routes>
      </div>


    </>
  )
}
