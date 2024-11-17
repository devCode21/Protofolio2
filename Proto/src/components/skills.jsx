import React from 'react'


function skills({Name="123", Image}) {
  return (
   <>
       
          <div className="skill">
            <img src={Image}/>
            <h2>{Name}</h2>
          </div>
          
   </>
  )
}

export default skills
