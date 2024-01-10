import React from 'react'

const Form = () => {
  return (
    <form>
     <h1>Contact <span>Here</span></h1> 
     <input type="text" name="name" id="" placeholder='Enter name'/>
     <input type="email" name="email" id="" placeholder='example@gmail.com'/>
     <input type="phone" name="phone" id="" placeholder='+91'/>

     <textarea name="message" id="" cols="30" rows="10" placeholder='type here....'/>

     <button type="submit">Send</button>
    </form>
  )
}

export default Form
