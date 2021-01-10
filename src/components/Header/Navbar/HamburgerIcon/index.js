import React from 'react'

const Hamburger = ({open, toggleClick}) => {
    return (
        <>
            <button className={`hamburger-icon ${open && 'open'}`} onClick={toggleClick}>
                <div className='line' />
                <div className='line' />
                <div className='line' />
            </button>
        </>
    )
}

export default Hamburger
