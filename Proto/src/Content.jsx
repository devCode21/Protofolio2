import React from 'react'
import { Link } from 'react-scroll'

//content-conatiner=>Content=> h1 and div( 2 buttons),
function Content() {
  return (
    <div className='Content-conatiner'>
          <div className="Content">
             <div className="text">
                 <h1>"HI</h1>
                 <h1 style={{marginLeft:"2rem"}}>I'm a Passionate programmer..."</h1>
             </div>
             <div className="text-button">
                 <button>view projects</button>
                 <button><Link to='skill'>view Skill</Link></button>
             </div>
              
          </div>
          <div className="Content-Image">
             {/* <img style={{borderRadius:"50%" ,height:"400px" ,width:"400px"}} src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-cyber-gamer_117038-7605.jpg" alt="" /> */}

          </div>
       
    </div>
  )
}

export default Content
