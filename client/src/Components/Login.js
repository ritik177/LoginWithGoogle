import React from 'react'
import './login.css';



const Login = () => {

  const loginwithgoogle = () => {
    window.open("http://localhost:6005/auth/google/callback", "_self")
  }

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
          <button className='login-with-google-btn' onClick={loginwithgoogle} > SIGN IN with Google</button>

        </div>
      </div>
    </>
  )
}

export default Login;