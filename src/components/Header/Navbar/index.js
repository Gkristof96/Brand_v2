import React from 'react'
import Hamburger from './HamburgerIcon'

const Navbar = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <nav className={`navbar ${isMenuOpen && 'open'}`}>
                <div className='navbar__logo'>
                    <img src='images/logo.png' alt='logo' />
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
