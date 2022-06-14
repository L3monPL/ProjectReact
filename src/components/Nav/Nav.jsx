import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {MdContactMail} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#skills" onClick={() => setNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#contact" onClick={() => setNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav