import React from 'react'
import { Link } from 'react-scroll'

//required to desgin .conatiner div=> heding div and link div=>3para
function Nav() {
  return (

    <div className='conatiner'>
        <div className="heading">
            <h1>Coder</h1>
        </div>
        <div className="link">
            <h2>Home</h2>
            <h2><Link to='skill'>Skill</Link></h2>
            <h2><Link to="about">About</Link></h2>
            <h2><Link to='contact'>contact us</Link></h2>
        </div>
      
    </div>
  )
}

export default Nav
