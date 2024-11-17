import React from 'react'

function Project({ProjectName,Content, Image, id}) {
  return (
    <div className='Project' id={id}>
        <div className="ProImage">
            <img src={Image} alt="" />
        </div>
        <div className="ProContent">
            <h1>{ProjectName}</h1>
            <p>{Content} {id}</p>
        </div>
    </div>
  )
}

export default Project
