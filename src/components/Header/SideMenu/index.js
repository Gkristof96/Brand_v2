import React from 'react'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                    <li className='menu-item'><a href='/'>Services</a></li>
                    <li className='menu-item'><a href='/'>Trainers</a></li>
                    <li className='menu-item'><a href='/'>Prices</a></li>
                    <li className='menu-item'><a href='/'>Contact</a></li>
            </ul>
        </>
    )
}

export default SideMenu
