import React from 'react'
import './Form.css'
import { useState } from 'react'

const Form = () => {

    const [data, setName] = useState({name: "", email: "", phone: "", message: ""});
    const handleChange = () => {

    }

    const handleSubmit = () => {


    }
  return (
    <form method='post' onSubmit={handleSubmit}>
     <h1>Contact <span>Here</span></h1> 
     <input type="text" name="name" id="" placeholder='Enter name'/>
     <input type="email" name="email" id="" placeholder='example@gmail.com'/>
     <input type="phone" name="phone" id="" placeholder='+91'/>

     <textarea name="message" id="" cols="40" rows="20" placeholder='type here....'/>

     <button type="submit">Send</button>
    </form>
  )
}

export default Form
