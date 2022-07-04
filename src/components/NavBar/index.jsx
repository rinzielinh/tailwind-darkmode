import React from 'react'
import { useState } from 'react'
import {BsSunFill} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {HiOutlineMenu} from'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import useDarkMode from '../../useDarkMode'

const NavBar = (props) => {
    const {isMobile} = props;
    const [openMenu, setOpenMenu] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <nav className="flex items-center">
        <div className="flex items-center">
            <div className="text-20 font-bold mr-2">NerdCard</div>
            {
                isDarkMode ? (
                    <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)}/>
                ) : (
                    <FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)}/>
                )
            }
            
        </div>
        <ul className="md:flex md:gap-10 flex gap-2 ml-auto md:text-16 font-semibold">
            { openMenu && isMobile ? (
                <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu} />
            ) : !openMenu && isMobile ? (
                <HiOutlineMenu size={"24px"} className="cursor-pointer" onClick={handleMenu} />
            ) : (
             <>
                <li className="menu-hover">Features</li>
                <li className="menu-hover">Menu</li>
                <li className="menu-hover">Our Story</li>
                <li className="menu-hover ml-28">Contact</li>
             </>
            )
            }

            { openMenu && (
                <div className="absolute right-8 bg-white p-8 text-center text-13 text-black z-10 dark:bg-black dark:text-white">
                    <li className="menu-hover">Features</li>
                    <li className="menu-hover">Menu</li>
                    <li className="menu-hover">Our Story</li>
                    <li className="menu-hover">Contact</li>
                </div>
            )}
        </ul>
    </nav>
  )
}

export default NavBar