import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image:IMG1,
    title:"Crpto currency dashboard and financial visualtization",
    github:"https://github.com/Dev-W32/",
    demo:"https://picsum.photos/200/300"
  },
  {
    id:2,
    image:IMG2,
    title:"Crpto currency dashboard and financial visualtization",
    github:"https://github.com/Dev-W32/",
    demo:"https://picsum.photos/200/300"
  },
  {
    id:3,
    image:IMG3,
    title:"Crpto currency dashboard and financial visualtization",
    github:"https://github.com/Dev-W32/",
    demo:"https://picsum.photos/200/300"
  },
  {
    id:4,
    image:IMG4,
    title:"Crpto currency dashboard and financial visualtization",
    github:"https://github.com/Dev-W32/",
    demo:"https://picsum.photos/200/300"
  },
  {
    id:5,
    image:IMG5,
    title:"Crpto currency dashboard and financial visualtization",
    github:"https://github.com/Dev-W32/",
    demo:"https://picsum.photos/200/300"
  },
  {
    id:6,
    image:IMG6,
    title:"Crpto currency dashboard and financial visualtization",
    github:"https://github.com/Dev-W32/",
    demo:"https://picsum.photos/200/300"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <h1>Later</h1>
    <div className="container portfolio__container">
     {
       data.map(({id,image,title,github,demo})=>{
       return(
        <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={image} alt={title} />
        </div>
      <h3>{title}</h3>
     <div className="portfolio-item-cta">
     <a href={github} className="btn" target="_blank">Github</a>
      <a href={demo} className="btn btn-primary" target="_blank">DEMO</a>
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