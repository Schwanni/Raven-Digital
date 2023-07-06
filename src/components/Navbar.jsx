import Search from "../images/search-2-line.svg"
import Logo from "../images/Asset1.png";
import { NavigationLinks } from "../constants";
import Menu from "../images/menu.svg"
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navToggle = () => {
    setToggle(!toggle)
  }
  return (
  
    <nav className='flex w-full justify-between gap-0'>
      <div>
        <img src={Logo} alt="logo" className="mt-12 ml-14 lg:ml-28" />
      </div>

      <div className='lg:w-1/2 hidden md:flex md:w-2/5 mt-14 lg:ml-32'>
        <ul className='flex flex-1 justify-between items-center gap-3 list-none'>
        {NavigationLinks.map((NavigationsLink) => (
            <li key={NavigationsLink.id} className='text-white flex flex-col justify-between items-center'><a href={NavigationsLink.link}>{NavigationsLink.linkname}</a>
            </li>
        ))}
        </ul>
      </div>

      <div className="mx-4">
        <button onClick={navToggle} className="text-white md:hidden mx-8 my-12 border-2 rounded-full flex items-center justify-center w-[38px] h-[38px]"><img src={Menu} /></button>
        <div className="">
          {toggle && (
              <ul className={`flex flex-col justify-between items-center gap-3 list-none bg-slate-700`}>
              {NavigationLinks.map((NavigationsLink) => (
                  <li key={NavigationsLink.id} className='text-white flex flex-col justify-between items-center'><a href={NavigationsLink.link}>{NavigationsLink.linkname}</a>
                  </li>
              ))}
              </ul>
          )}
        
        </div>
      </div>
          
      <div className="hidden md:ml-8 mt-14 lg:flex md:w-1/5">
        <img src={Search} alt="search" className="w-[24px] h-[24px]" />
      </div>
    </nav>
    
  )
}

export default Navbar