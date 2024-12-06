import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'

export const PagoTrackerScreen = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
    
  }

  return (
    <div>
      <h1>PagoTrackerScreen</h1>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
