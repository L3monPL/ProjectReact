import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Skills() {
  return (
    <section id='skills'>
      <div className="skills_header">
        <h3>Skills</h3>
        <h2>Umiejętności</h2>
      </div>
      <div className="skills_container">
        <div className="skills_prog">
          <h3>Front End Developer</h3>
          <div className="skills_content">
            <article className='skills_detail'>
            <BsPatchCheckFill className='skills_detail_icons'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Mid</small>
            </div>
            </article>

            <article className='skills_detail'>
            <BsPatchCheckFill className='skills_detail_icons'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Mid</small>
            </div>
            </article>

            <article className='skills_detail'>
            <BsPatchCheckFill className='skills_detail_icons'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Junior</small>
            </div>
            </article>

            <article className='skills_detail'>
            <BsPatchCheckFill className='skills_detail_icons'/>
            <div>
              <h4>Wordpress</h4>
              <small className='text-light'>Mid</small>
            </div>
            </article>

            <article className='skills_detail'>
            <BsPatchCheckFill className='skills_detail_icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Junior</small>
              </div>
            </article>

            <article className='skills_detail'>
            <BsPatchCheckFill className='skills_detail_icons'/>
            <div>
              <h4>C#</h4>
              <small className='text-light'>Junior</small>
            </div>
            </article>
          </div>
        </div>
        <div className="skills_graph">
        <div className="skills_prog">
          <h3>Grafik</h3>
          <div className="skills_content">
              <article className='skills_detail'>
              <BsPatchCheckFill className='skills_detail_icons'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Mid</small>
              </div>
              </article>

              <article className='skills_detail'>
              <BsPatchCheckFill className='skills_detail_icons'/>
              <div>
                <h4>Blender</h4>
                <small className='text-light'>Mid</small>
              </div>
              </article>

              <article className='skills_detail'>
              <BsPatchCheckFill className='skills_detail_icons'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Junior</small>
              </div>
              </article>

              <article className='skills_detail'>
              <BsPatchCheckFill className='skills_detail_icons'/>
              <div>
                <h4>Premiere Pro</h4>
                <small className='text-light'>Junior</small>
              </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills