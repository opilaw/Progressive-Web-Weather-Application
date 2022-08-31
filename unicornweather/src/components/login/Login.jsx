import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { signUp, useAuth, login } from '../../firebase.js'
import { useRef, useState } from 'react'

const Login = () => {
  async function handleLogin() {
    setLoading(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {}
    setLoading(false)
  }
  const emailRef = useRef()
  const passwordRef = useRef()
  const [loading, setLoading] = useState(false)
  const currentUser = useAuth()

  return (
    <div className="login-form">
      <div className="login-welcone">
        <h1 id="acc-login">Already have an account?</h1>
        <h2 id="ee-login">Please log in</h2>
      </div>
      <form>
        <div className="form-inputs-login">
          <label htmlFor="username">Username</label>
          <input
            placeholder="Username"
            id="Username"
            type="text"
            name="username"
          />
        </div>

        <div className="form-inputs-login">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            id="Password"
            type="password"
            name="password"
          />
        </div>

        <div className="buttons__login">
          <button
            disabled={loading || currentUser}
            onClick={handleLogin}
            id="login__submit__btn"
          >
            <Link to="/desktop">Login</Link>
          </button>

          <button id="cancel__btn">
            <Link to="/landing">Cancel</Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
