import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'

export const Navbar = () => {

  const dispatch  = useDispatch()
  const {name} = useSelector(state => state.auth)

  const handleSalir = () => {
    dispatch( startLogout() );
  }

  return (
    <div className='navbar navbar-dark bg-dark mb-4' >
      <span className='navbar-brand'>
        {name}
      </span>

      <button className='btn btn-danger' onClick={ handleSalir }>
        <i className='fas fa-sign-out-alt'></i>
        <span> Salir</span>
      </button>
    </div>
  )
}
