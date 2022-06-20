import React from 'react'
import './portfolio.css'
import Site_1 from '../../assets/site_1.png'
import Site_2 from '../../assets/site_2.png'


const data = [
  {
    id: 1,
    image: Site_1,
    title: 'Strona apartamentów',
    github: 'https://github.com/L3monPL/Zlecenie-testowe-dla-firmy',
    demo: 'https://l3monpl.github.io/Zlecenie-testowe-dla-firmy/'
  },
  {
    id: 2,
    image: Site_2,
    title: 'Portfolio React',
    github: 'https://github.com/L3monPL/ProjectReact',
    demo: 'https://l3monpl.github.io/ProjectReact/'
  },
  {
    id: 3,
    image: 'https://br.atsit.in/pl/wp-content/uploads/2021/08/przestrzenie-kodowe-github-sa-teraz-dostepne-dla-planow-team-i-enterprise-cloud.jpg',
    title: 'Repozytorium Git',
    github: 'https://github.com/L3monPL',
    demo: 'https://github.com/L3monPL'
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