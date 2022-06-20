import React from 'react'
import './portfolio.css'


const data = [
  {
    id: 1,
    image: 'https://img.freepik.com/darmowe-wektory/recznie-rysowane-tworcow-stron-internetowych_23-2148819604.jpg?w=2000',
    title: 'Strona pierwsza',
    github: 'https://websiters.pl/',
    demo: 'https://websiters.pl/'
  },
  {
    id: 2,
    image: 'https://media.kasperskydaily.com/wp-content/uploads/sites/95/2021/02/02203039/deep-web-dark-web-darknet-surface-web-difference-featured.jpg',
    title: 'Strona druga',
    github: 'www.google.pl',
    demo: 'www.websiters.pl'
  },
];

// const data2 = data.filter(e => e.id > 1);
// console.log(data2);

export const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className="portfolio_header">
        <h3>Art</h3>
        <h2>Portfolio</h2>
      </div>

      <div className="container_0 portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
                  <div className="portfolio_item_image">
                      <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item_cta">
                      <a href={github} className='btn_portfolio' target='_blank'>GitHub</a>
                      <a href={demo} className='btn_portfolio btn-2_portfolio' target='_blank'>Live Demo</a>
                  </div>
              </article>
              )
            })
        }
      </div>
    </section>
  )
}
export default Portfolio