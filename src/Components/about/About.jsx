import React from 'react'
import './about.css'
import me_about from '../../assets/devesh-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {MdOutlineSystemSecurityUpdateGood} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
const About = () => {
  return (
    
      <section id='about'>
      <h5>Get to know</h5>
      <h2>About me!</h2>
    
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={me_about} alt="about_img" />
          </div>
        </div>
     {/*  </div>  */}       

      <div className="about__content">
      <div className="about__cards">
          <article className="about__card">
            <FaAward/>
            <h5>Experience</h5>
            <small>2+ years</small>
          </article>

          <article className="about__card">
            <MdOutlineSystemSecurityUpdateGood/>
            <h5>Level</h5>
            <small>Intermediate</small>
          </article>

          <article className="about__card">
            <AiOutlineFundProjectionScreen/>
            <h5>Projects</h5>
            <small>20+ Done! </small>
          </article>
          </div>
     
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        In obcaecati officia pariatur eum quo unde nostrum? Atque, nostrum. Ipsam, debitis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, suscipit.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    

      </div>
      </div>
      </section>
    
  )
}

export default About
