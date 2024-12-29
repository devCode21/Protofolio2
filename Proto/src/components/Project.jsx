import React from 'react'
import { Link} from 'react-router-dom'

function Project({ProjectName,Content, Image, id}) {
  return (
    <div className='Project' id={id}>
      
       <div className="ProImage">
            <img src={Image} alt="" />
        </div>
        <div className="veiwproject">
            <button> <a href="https://web-server-git-main-devcode21s-projects.vercel.app/" style={{textDecoration:'none',color:'black'}}>view Project</a></button>
            <button > <a href="https://github.com/devCode21/webServer"  style={{textDecoration:'none',color:'black'}}>Source Code</a></button>
        </div>
        <div className="ProContent">
            <h1>{ProjectName}</h1>
          </div>
        
       
      
    </div>
  )
}

export default Project
