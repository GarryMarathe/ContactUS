import React from 'react'
import './Form.css'
import { useState } from 'react'

const Form = () => {

  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });

  }

  const handleSubmit = () => {

    const toEmail = "gauravmarathe6468@gmail.com";
    const subject = encodeURIComponent("User Inquiry");
    const body = encodeURIComponent(`${data.message}`);
  
    window.open(`https://mail.google.com/mail/u/0/?fs=1&to=${toEmail}&su=${subject}&body=${body}&tf=cm`, "_blank");


  }

  return (

    <div className="contact-container">
      <div className="contact-heading">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit} dataform>
          <h1>Contact <span>Here</span></h1>
          <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='Enter name' required/>
          <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder='example@gmail.com' required />
          <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder='+91' required/>

          <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder='type here....' required/>

          <button type="submit">Send</button>
        </form>

      </div>
    </div>
  )
}

export default Form
