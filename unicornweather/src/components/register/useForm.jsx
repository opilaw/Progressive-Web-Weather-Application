//import React from "react";
import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  console.log(callback) //callback
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })
  const [errors, setErrors] = useState({})
  //const [isSubmitting, setIsSubmitting]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const locErrors = validate(values)
    setErrors(locErrors)

    //setErrors(validate(values));
    // setIsSubmitting(true);
    if (Object.keys(locErrors).length === 0) {
      console.log(locErrors)
      callback()
    }
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
