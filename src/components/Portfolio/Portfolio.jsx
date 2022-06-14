import React from 'react'
import './portfolio.css'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className="portfolio_header">
        <h3>Art</h3>
        <h2>Portfolio</h2>
      </div>

      <div className="container_0 portfolio_container">
        <article className='portfolio_item'>
            <div className="portfolio_item_image">
                <img src="https://img.freepik.com/darmowe-wektory/recznie-rysowane-tworcow-stron-internetowych_23-2148819604.jpg?w=2000" alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item_cta">
                <a href="https://gitbub.com" className='btn_portfolio' target='_blank'>GitHub</a>
                <a href="https://gitbub.com" className='btn_portfolio btn-2_portfolio' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}
export default Portfolio