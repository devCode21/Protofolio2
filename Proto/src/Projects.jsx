import React from 'react'
import Project from './components/Project'
import {Weather,Traveller_site,Youtbe} from './components/Images'
function Projects() {
   const arr=["box1","box2","box3"]


  return (

   <div className="ProjectBox" id='project'>
       <h1 className='prohead'>My Projects</h1>
     <div className="ProjectImg">
   
       <img src="" alt="" />
     </div>
     <div className='Projects'>
      <Project  ProjectName={"PlacInfo"} Content={'its is website '} Image={Traveller_site} id={arr[0]} />
    
       </div>
   </div> 
   
  )
}

export default Projects
