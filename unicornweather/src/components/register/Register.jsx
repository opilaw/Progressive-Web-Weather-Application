import React, { useState } from 'react'
import './register.css'
import Registerform from './Registerform'
import rainbow from '../../assets/img2.png'
import sun from '../../assets/sun.png'
import FormSuccess from './FormSuccess'

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = () => {
    setIsSubmitted(true)
  }
  console.log(isSubmitted)

  return (
    <div className="Register">
      <div className="register-images">
        <div className="rainbow">
          <img src={rainbow} alt="" id="rainbow" />
        </div>

        <div className="sun">
          <img src={sun} alt="" id="sun" />
        </div>
      </div>

      {!isSubmitted ? (
        <Registerform submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </div>
  )
}

export default Register
