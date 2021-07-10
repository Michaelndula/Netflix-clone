import "./login.scss"
import React from 'react'

const Login = () => {

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt=""/>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or phone number"/>
          <input type="password" placeholder="Password"/>
          <button className="loginButton">Sign in</button>
          <span>New to Netflix?<b>Sign up Now!</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.<b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login
