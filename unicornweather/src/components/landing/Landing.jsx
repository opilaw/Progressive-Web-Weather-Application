import React from 'react'
import './landing.css'
import unicorn from '../../assets/uni.svg'

import { Link } from 'react-router-dom'
import Title from './Title'

const Landing = () => {
  return (
    <div className="Landing">
      <div className="images">
        <Title />
        <img className="unicorn" id="unicorn" src={unicorn} alt="unicorn" />;
      </div>
      <div className="welcome__text">
        <h1 id="welcome">Welcome to Unicorn weather application!</h1>
        <h2 id="or">Log in or sign up in order to use application</h2>
      </div>

      <div className="buttons">
        <button id="login__btn">
          <Link to="/login">Login</Link>
        </button>

        <button id="register__btn">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  )
}

export default Landing
