import React, { useState, useEffect} from 'react'
import Hamburger from './HamburgerIcon'
import { motion } from 'framer-motion'

const navbar = {
    hidden: {
        opacity: 0,
        y: '-100vh'
    },
    visible: {
        opacity: 1,
        y: '0',
        transition: {
            type: 'spring',
            duration: 0.25,
        }
    }
}
const navmenu = {
    hover: {
        y: '-5px'
    },
    active: {
        y: '-4px',
        fontColor: "#eb4e44",
    }
}

const Navbar = ({isMenuOpen, handleOpen}) => {
    const [scroll, setScroll] = useState(false);

    const  changeNav = () => {
        if(window.scrollY >= 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])
    return (
        <>
            <motion.nav className={`navbar ${(isMenuOpen || scroll) && 'open'}`}
                variants={navbar}
                initial='hidden'
                animate='visible'
            >
                <div className='navbar__logo'>
                    <img src='images/logo_3.png' alt='logo' />
                    <h1>Cross Gym</h1>
                </div>
                <ul className='navbar__menu'>
                    <motion.li className='menu-item'
                        variants={navmenu}
                        whileHover='hover'
                        whileTap='active'
                    ><a href='#services'>Services</a></motion.li>
                    <motion.li className='menu-item'
                        variants={navmenu}
                        whileHover='hover'
                    ><a href='#trainers'>Trainers</a></motion.li>
                    <motion.li className='menu-item'
                        variants={navmenu}
                        whileHover='hover'
                    ><a href='#prices'>Prices</a></motion.li>
                    <motion.li className='menu-item'
                        variants={navmenu}
                        whileHover='hover'
                    ><a href='#contact'>Contact</a></motion.li>
                </ul>
                <div className='navbar__toggle'>
                    <Hamburger open={isMenuOpen} toggleClick={handleOpen}/>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar
