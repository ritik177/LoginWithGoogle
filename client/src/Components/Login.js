import React from 'react'
import './login.css';



const Login = () => {
  return (
    <>
      <div className="login-page">
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <div className="form">
          <form className='login-form'>
            <input type="text" name='' id='' placeholder='Enter your username' />
            <input type="password" name='' id='' placeholder='Enter Your Password' />
            <button className='btn'>Login</button>
            <p className="message">Not Register? <a href='#'> Create an account</a></p>
          </form>
          <button className='login-with-google-btn'> SIGN IN with Google</button>
        </div>
      </div>
    </>
  )
}

export default Login