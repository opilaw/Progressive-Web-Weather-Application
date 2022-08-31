import React from 'react'
import './register.css'
import useForm from './useForm'
import validate from './validateInfo'
import { Link } from 'react-router-dom'
import { signUp, useAuth } from '../../firebase.js'
import { useRef, useState } from 'react'

const Registerform = ({ submitForm }) => {
  console.log(submitForm)
  const { handleChange, values, handleSubmit, errors } = useForm(
    () => submitForm(),
    validate,
  )
  async function handleSignup() {
    setLoading(true)
    try {
      await signUp(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert('error')
    }
    setLoading(false)
  }

  const emailRef = useRef()
  const passwordRef = useRef()
  const [loading, setLoading] = useState(false)
  const currentUser = useAuth()

  return (
    <div className="Register__form">
      <div className="current-log-in">
        Currentl log in as a {currentUser?.email}
      </div>
      <div className="register-welcone">
        <h1 id="acc">Don't have an account?</h1>
        <h2 id="ee">Please register now for free</h2>
      </div>
      <form>
        <div className="form-inputs">
          {' '}
          <label htmlFor="username">Username</label>
          <input
            placeholder="Username"
            id="Username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}{' '}
        </div>

        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            id="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            ref={emailRef}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            id="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            ref={passwordRef}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password">Repeat password</label>
          <input
            placeholder="Repeat password"
            id="password2"
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <div className="buttons__register">
          {/* <button onClick={handleSubmit} id="register__submit__btn"> */}
          <button
            disabled={loading || currentUser}
            onClick={handleSignup}
            id="register__submit__btn"
          >
            Register
          </button>

          <button id="cancel__btn">
            <Link to="/landing">Cancel</Link>
          </button>

          <span className="form-input-register">
            Already have an account?{' '}
            <a href="/login">
              <Link to="/login">Log in</Link>
            </a>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Registerform
