import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/imageProf.jpg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <h2>Hello I'm</h2>
        <h1>Mikołaj Andrzejewski</h1>
        <p>Front End Developer</p>
        <CTA/>
        <div className="imageMe">
          <img src={ME} className = "me" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header