import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Content from './Content.jsx'

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
       {/* <Projects/> */}
       <SkillGrp/>
       <Contact/>
      </>
       
    )
 
 
}

export default App
