import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Content from './Content'
import { useDispatch, useSelector } from 'react-redux'
import About from './About'
import Projects from './Projects'
import SkillGrp from './components/SkillGrp'
import Contact from './components/contact'

function App() {
 
    return (
      <>
       <Nav/>
       <Content/>
       <About/>
       {/* <Projects/> */}
       <SkillGrp/>
       <Contact/>
      </>
       
    )
 
 
}

export default App
