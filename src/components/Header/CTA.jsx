import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a href={CV} download className='btn'>Pobierz CV</a>
            <a href="https://github.com/L3monPL" target="_blank" className='btn btn-2'>GitHub</a>
        </div>
    </div>
  )
}

export default CTA