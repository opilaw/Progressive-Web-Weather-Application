import React from 'react'
import uni2 from '../../assets/uni2.png'
import Landing from '../landing/Landing'
import { Link } from 'react-router-dom'

const FormSuccess = () => {
  return (
    <div className="form-success">
      <div className="form-sucess-message">We have received your request</div>
      <img src={uni2} className="uni2"></img>
      <button onClick={null} id="back_register_btn">
        <Link to="/landing">Back</Link>
      </button>
    </div>
  )
}

export default FormSuccess
