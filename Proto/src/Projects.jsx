import React from 'react'
import Project from './components/Project'
import {Weather,Traveller_site,Youtbe} from './components/Images'
function Projects() {
   const arr=["box1","box2","box3"]


  return (

   <div className="ProjectBox">
    
     <div className="ProjectImg">
   
       <img src="" alt="" />
     </div>
     <div className='Projects'>
      <Project  ProjectName={"Travellers Site"} Content={'its is website '} Image={Traveller_site} id={arr[0]} />
      <Project ProjectName={"video player"} Content={'its is website '} Image={Youtbe} id={arr[1]} />
      <Project ProjectName={"weather App"} Content={'its is website '} Image={Weather} id={arr[2]}/>
      <Project ProjectName={"weather App"} Content={'its is website '} Image={Weather} id={arr[1]}/>
      <Project ProjectName={"weather App"} Content={'its is website '} Image={Weather} id={arr[1]}/>
      <Project ProjectName={"weather App"} Content={'its is website '} Image={Weather} id={arr[1]}/>
       </div>
   </div> 
   
  )
}

export default Projects
