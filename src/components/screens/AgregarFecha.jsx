import React from 'react'
import { CalendarScreen } from '../calendar/CalendarScreen'

export const AgregarFecha = () => {
  return (
    <div className='relative w-full h-full z-50'>
    <h1 className='text-4xl p-3'>Asignacion de fecha de pago</h1>

    <CalendarScreen />
</div>
  )
}
