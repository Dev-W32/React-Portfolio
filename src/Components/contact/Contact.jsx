import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_201y7zh', 'template_pe3ge3l', form.current, 'Jxq-fR6HPnPjO1GGO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">

    <h5>Get in touch</h5>
    <h2>Contact me</h2>
    <div className="container contact__container">
      <div className="contact__options">
    <article className="contact__option">
      <MdEmail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>devesh.wadhwani123@gmail.com</h5>
      <a href="mailto:devesh.wadhwani123@gmail.com" target="_blank">Send an email</a>
    </article>
    <article className="contact__option">
      <FaInstagram className='contact__option-icon'/>
      <h4>Instagram</h4>
      <h5>@deveshwadhwani</h5>
      <a href="https://www.instagram.com/deveshwadhwani/" target="_blank">Follow me on instagram</a>
    </article>
    <article className="contact__option">
    <AiFillLinkedin className='contact__option-icon'/>
      <h4>Linkedin</h4>
      <h5>Devesh Wadhwani</h5>
      <a href="https://www.linkedin.com/in/devesh-wadhwani-0aa517216/" target="_blank">Send a message</a>
    </article>
      </div>
      {/* End of comtact */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full Name' required/>
        <input type="email" name='email' placeholder='Your email' required/>
        <textarea name="message" rows="7" placeholder='your message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>

    </section>

  
  )
}

export default Contact