import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

export const App = () => {
  return (
    <div>
      <Header/>
      <Nav/> 
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
