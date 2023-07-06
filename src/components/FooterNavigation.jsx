import React from 'react'

const FooterNavigation = () => {
  return (
    <nav >
        <ul className='flex flex-col sm:flex-row my-8 sm:my-16 justify-center gap-8'>
            <li className='text-white text-lg font-bold'><a href="#">Website development</a></li>
            <li className='text-white text-lg font-bold'><a href="#">Branding</a></li>
            <li className='text-white text-lg font-bold'><a href="#">UI/UX design</a></li>
            <li className='text-white text-lg font-bold'><a href="#">Software</a></li>
            <li className='text-white text-lg font-bold'><a href="#">Digital marketing</a></li>
        </ul>
    </nav>
  )
}

export default FooterNavigation