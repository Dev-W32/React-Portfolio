import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'


const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com' target='_blank'><AiFillLinkedin/></a>
        <a href='https://www.github.com' target='_blank'><BsGithub/></a>
        <a href='https://www.instagram.com' target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default headerSocials