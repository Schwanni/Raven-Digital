import React from 'react'
import Logo from "../images/Asset1.png";
import FooterNavigation from './FooterNavigation';
import FacebookIcon from "../images/socialIcons/icons8-facebook.svg"
import TwitterIcon from "../images/socialIcons/icons8-twitter.svg"
import InstaIcon from "../images/socialIcons/icons8-instagram.svg"

const Elements = () => {
  return (
    <section id="elements" className='section'>
      <footer className='flex flex-col justify-center items-center w-full'>
      <div className='flex justify-center items-center w-full my-12'> 
        <img src={Logo} alt="logo" className="mt-12 flex justify-center items-center" />
      </div>
      <span className='flex justify-center items-center text-center w-full'><p className='text-[#787878] max-w-[559px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse </p></span>
      <div>
        <FooterNavigation />
      </div>
      <div className='flex gap-4 sm:gap-12 sm:my-16'>
        <img src={FacebookIcon} alt="facebook" />
        <img src={TwitterIcon} alt="facebook" />
        <img src={InstaIcon} alt="facebook" />
      </div>
      <span className='mb-16'><p className='text-white opacity-50'>Copyright © 2021. Raven Digital. All rights reserved.</p></span>
      </footer>
    </section>
  )
}

export default Elements