import React from 'react'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                    <li className='menu-item'><a href='#services'>Services</a></li>
                    <li className='menu-item'><a href='#trainers'>Trainers</a></li>
                    <li className='menu-item'><a href='#prices'>Prices</a></li>
                    <li className='menu-item'><a href='#contact'>Contact</a></li>
            </ul>
        </>
    )
}

export default SideMenu
