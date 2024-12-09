import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const [ values, handleInputChange ] = useForm()

  const { email, password} = values

  const handleLogin = (e) => {
    e.preventDefault();
   
    dispatch( startLoginEmailPassword( email, password ) );
  }

  const handleGoogleLogin = () =>{
    console.log('registrado con google')
    dispatch(startGoogleLogin())

  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
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

        <button
          type='submit'
          className='btn btn-primary btn-block'
          // disabled={loading}
        >Login</button>



        <div className='auth__social-networks'>
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20230822192910%21Google_%22G%22_logo.svg/118px-Google_%22G%22_logo.svg.png" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link
          to="/auth/register"
          className='link'
          >
          Create new account
        </Link>

      </form>
    </>
  )
}
