import React from 'react'
import './about.css'
import ME from '../../assets/imageProf.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
import {GoChecklist} from 'react-icons/go'

function About() {
  return (
    <section id='about'>
      <div className="about_header">
        <h3>Info</h3>
        <h2>O mnie</h2>
      </div>

      <div className="about_container">
        <div className="imgContainer">
          <div className="imageBg">
            <div className="imageCol">
              <img src={ME} alt="" />
            </div>
          </div>
        </div>
        

        <div className="contentCol">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Programowanie</h5>
              <small>5+ Lat Nauki</small>
            </article>

            <article className="about_card">
            <AiFillProject className='about_icon'/>
              <h5>Projekty</h5>
              <small>10+ realizacji</small>
            </article>

            <article className="about_card">
              <GoChecklist className='about_icon'/>
              <h5>Wykształcenie</h5>
              <small>Inżynier</small>
            </article>
          </div>
          <p>Jestem studentem 3 roku informatyki na specjalizacji programowanie. 
            Projekty które wdrażam są wysokiej jakości. Duża uwagę przywiązuje do szczegółów projektu 
            oraz jakości kodu który piszę. Biorę pod uwagę standardy W3C, optymalizację, 
            konwencje oraz semantykę kodu. dsadnsadsandisaubdsf fdsb dsf fsdgdgdfgdf gdfgdfgdf fgdfgdfgdf fdgdfg</p>
        </div>
      </div>
    </section>
  )
}

export default About