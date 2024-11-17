import React, { useState } from 'react'
import img from'../assets/abcd.png'

function contact() {
    const[name, setname]=useState('');
    const[email, setemail]=useState('')
    const[message, setmessage]=useState('')
     const submit=(e)=>{
         e.preventDefault;
         alert('your meesage has been sent')
        
     }
    
  return (
    <div className="contact-container">
     
      <div className="img-container">
      <h1>YOU CAN CONNECT WITH US</h1>
        <img src={`${img}`} alt="" />
      </div>
      <div className='contact' id='contact'>
      
      <form action="#" onSubmit={submit} className='user-info' > <br />
        {/* <h1 style={{color:"white",marginBottom:"1rem",textDecoration:"underLine" ,fontFamily:"monospace"}}>YOU CAN CONNECT WITH US HERE</h1> &nbsp; <br /> <br /> */}
        <div className='input'><label htmlFor="name"> &nbsp;&nbsp;Your Name&nbsp;</label> &nbsp; <br />
        <input id='name' type="text" value={name} required={true} placeholder='enter your name' onChange={(e)=>(setname(e.target.value))}/> <br /></div>
        <div className='input'> 
        <label  htmlFor="email">&nbsp; Your Email&nbsp; </label> <br />
        <input type='text' id='email' value={email} required={true} placeholder='enter your email' onChange={(e)=>(setemail(e.target.value))}  /> <br />
        </div>
        <div className='msg'>
        <label htmlFor="message">&nbsp;&nbsp;Message</label>  <br />
        <textarea type='text' value={message}required={true} placeholder='enter your message' onChange={(e)=>(setmessage(e.target.value))} /> <br />

        </div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span><button type='submit' >Send Message</button>
      </form>
    </div>

    </div>
  )
}

export default contact
