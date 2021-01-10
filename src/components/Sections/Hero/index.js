import React from 'react'

const Hero = () => {
    return (
        <>
            <section className='hero section'>
                <div className='container'>
                    <h1>Cross gym</h1>
                    <h2>Where the <span>yourney</span> begins</h2>
                    <button>See more</button>
                </div>
                <svg className='triangle' width="1440" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440 100H0L1440 0V100Z" fill="white"/>
                </svg>
            </section>
        </>
    )
}

export default Hero
