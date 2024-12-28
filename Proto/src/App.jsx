import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './Content.jsx'
import Nav from './components/Nav.jsx'
import Projects from './Projects.jsx'
import { useDispatch, useSelector } from 'react-redux'
import About from './About.jsx'
import SkillGrp from './components/SkillGrp.jsx'
import Contact from './components/contact.jsx'

function App() {
 
    return (
      <>
       <Nav/>
       <Content/>
       <About/>
       <SkillGrp/>
        <Projects/>
        <div className='empty' style={{height:'30rem'}}></div>
       <Contact/>
      </>
       
    )
 
 
}

export default App
