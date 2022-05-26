import React from 'react'
import './Services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <div>
      <section id='services'>
        <h5>What i offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service__list">
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
  
        
          </ul>
        </article>
{/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
  
        
          </ul>
        </article>

    {/* End of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service__list">
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </li>
  
        
          </ul>
        </article>
      {/* End of Content creati */}
        </div>
      </section>
    </div>
  )
}

export default Services