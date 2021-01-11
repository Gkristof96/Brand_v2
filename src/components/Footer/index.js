import React from 'react'
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='logo'>
                        <div className='logo__brand'>
                            <img src='images/logo_3.png' alt='logo' />
                            <h1>Cross Gym</h1>
                        </div>
                        <h2>If you want to <span>change</span></h2>
                    </div>
                    <div className='social-icons'>
                        <AiOutlineFacebook className='icon'/>
                        <AiOutlineTwitter className='icon'/>
                        <AiOutlineInstagram className='icon'/>
                        <AiOutlineYoutube className='icon'/>
                    </div>
                    <h1 className='copyright'>Copyright © Cross Gym</h1>
                </div>
            </footer>
        </>
    )
}

export default Footer
