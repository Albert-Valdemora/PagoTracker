import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PagoTrackerScreen } from '../components/screens/PagoTrackerScreen'
import { Registros } from '../components/screens/Registros'
import { Clientes } from '../components/screens/Clientes'
import { Nabvar } from '../components/menuVertical/Nabvar'
import { NabvarH } from '../components/menuHorizotal/NabvarH'




export const DashboardRoutes = () => {
  return (
    <>

      <div className="app-container" style={{ display: "flex", gap: "" }}>

        <header>
          <Nabvar
            navigation={[
              { name: 'Sobre Nosotros', href: '/AboutUs', icon: "fa-solid fa-user-plus" },
              { name: 'Preguntas Frecuentes', href: '/FAQs', icon: "fa-solid fa-envelope" },
              { name: 'Registro', href: '/Registro', icon: "fa-solid fa-book" },
              { name: 'Clientes', href: '/Clientes', icon: "fa-solid fa-gear" }
            ]}
          />
        </header>

        <main >
          <NabvarH />
          <Routes>
            <Route path="/" element={<PagoTrackerScreen />} />
            <Route path='Registro' element={<Registros />} />
            <Route path='Clientes' element={<Clientes />} />
          </Routes>
        </main>
      </div>







    </>
  )
}