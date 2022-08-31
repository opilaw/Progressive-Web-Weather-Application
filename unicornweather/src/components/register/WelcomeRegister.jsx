import React from 'react'
import rainbow from '../../assets/img2.png'
import sun from '../../assets/sun.png'

const WelcomeRegister = () => {
  return (
    <div className="register-images">
      <div className="rainbow">
        <img src={rainbow} alt="" id="rainbow" />
      </div>

      <div className="sun">
        <img src={sun} alt="" id="sun" />
      </div>

      <div className="register-welcone">
        <h1 id="acc">Don't have an account?</h1>
        <h2 id="ee">Please register now for free</h2>
      </div>
    </div>
  )
}

export default WelcomeRegister
