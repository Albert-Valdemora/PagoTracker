import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';


export const RegisterScreen = () => {




  const [values, handleInputChange] = useForm()

  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
     console.log('es valido');
     
    }

  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
      console.log('Name is requered')
      return false

    } else if (!validator.isEmail(email)) {
      console.log('Email is not valid')
      return false

    } else if (password !== password2 || password.length < 5) {
      console.log('Password should be at least 6 characters and match each other')
      return false
    }


    
    return true
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleRegister}>


        {
          isFormValid &&
          (
            <div className='auth__alert-error'>
              <p>Eroror</p>
            </div>
          )
        }

        <input
          type='text'
          placeholder='name'
          name='name'
          className='auth__input'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />

        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder='Confirm password'
          name='password2'
          className='auth__input'
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type='submit'
          className='btn btn-primary btn-block mb-5'

        >Register</button>





        <Link
          to="/auth/login"
          className='link mt-5'
        >
          Already registered?
        </Link>

      </form>
    </>
  )
}
