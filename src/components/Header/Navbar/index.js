import React, { useState, useEffect} from 'react'
import Hamburger from './HamburgerIcon'
import { navbarData } from '../../../data/navbar'
import { Link } from 'react-scroll'

const Navbar = ({isMenuOpen, handleOpen}) => {
    const [scroll, setScroll] = useState(false);

    // scroll észlelés
    useEffect(() => {
        const  changeNav = () => {
            if(window.scrollY >= 80) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll',changeNav)
    },[])
    return (
        <>
            <nav className={`navbar ${(isMenuOpen || scroll) && 'open'}`}
            >
                <Link to='hero' smooth={true} duration={500} spy={true} exact="true" className='navbar__logo'>
                    <img src='images/logo_3.png' alt='logo' />
                    <h1>Cross Gym</h1>
                </Link>
                <ul className='navbar__menu'>
                    {navbarData.map((data,i) => ( <li key={i}><Link smooth={true} duration={500} spy={true} exact="true" to={data.path}>{data.title}</Link></li>))}
                </ul>
                <div className='navbar__toggle'>
                    <Hamburger open={isMenuOpen} toggleClick={handleOpen}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
