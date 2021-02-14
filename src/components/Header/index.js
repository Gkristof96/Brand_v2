import React, { useState } from 'react'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const handleOpen = () => setMenuOpen(!isMenuOpen)
    return (
        <>  
            <Navbar handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
            <SideMenu isMenuOpen={isMenuOpen} handleOpen={handleOpen}/>
        </>
    )
}

export default Header
