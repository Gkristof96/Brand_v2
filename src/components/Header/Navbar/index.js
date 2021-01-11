import React, { useState, useEffect} from 'react'
import Hamburger from './HamburgerIcon'

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
            <nav className={`navbar ${(isMenuOpen || scroll) && 'open'}`}>
                <div className='navbar__logo'>
                    <img src='images/logo_3.png' alt='logo' />
                    <h1>Cross Gym</h1>
                </div>
                <ul className='navbar__menu'>
                    <li className='menu-item'><a href='/'>Services</a></li>
                    <li className='menu-item'><a href='/'>Trainers</a></li>
                    <li className='menu-item'><a href='/'>Prices</a></li>
                    <li className='menu-item'><a href='/'>Contact</a></li>
                </ul>
                <div className='navbar__toggle'>
                    <Hamburger open={isMenuOpen} toggleClick={handleOpen}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
