import React from 'react'
import Skills from './skills'
import {js,HTML,css,Mongodb,nodejs,express,bootstarp,reactjs,PostMan,Tailwind} from './Images'
function SkillGrp() {
  return (
    <>
    <h1 className="Tech-stack" style={{fontSize:'3rem',marginLeft:"3rem",color:"white"}} >Tech <span style={{color:'lightgreen'}}>Stack</span></h1>
    <div className="SkillBox"  id="skill">
       
    <div className='SkillBlock'>
       <Skills  Name="Html" Image={HTML}/>
       <Skills  Name="Css" Image={css}/>
       <Skills  Name="JavaScript" Image={js}/>
       <Skills  Name="React Js" Image={reactjs}/>
       <Skills  Name="BootStrap" Image={bootstarp}/>
       <Skills  Name="Taiwind css" Image={Tailwind}/>
       <Skills  Name="Node js" Image={nodejs}/>
       <Skills  Name="Express Js" Image={express}/>
       <Skills  Name="MongoDb" Image={Mongodb}/>
       <Skills  Name="PostMan" Image={PostMan}/>  
           
  </div>

    <div className="SkillImage">
        
       {/* <img src="https://t4.ftcdn.net/jpg/05/07/26/35/360_F_507263544_1uixOcJGNwpv3q3WZgyqW1opDCU07Qek.jpg" alt="" /> */}
    </div>
    
    
  </div>
    </>
    
  )
}

export default SkillGrp
