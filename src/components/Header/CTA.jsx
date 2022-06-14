import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a href={CV} download className='btn'>Pobierz CV</a>
            <a href="#contact" className='btn btn-2'>Kontakt</a>
        </div>
    </div>
  )
}

export default CTA