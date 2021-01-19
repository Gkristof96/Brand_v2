import React from 'react'
import { motion } from 'framer-motion'

const header = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            duration: 1,
        }
    }
}
const text = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            duration: 1,
            delay: 0.2
        }
    }
}
const button = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            duration: 1,
            delay: 0.3
        }
    }
}

const Hero = () => {
    return (
        <>
            <section className='hero section' id='hero'>
                <div className='container'>
                    <motion.h1
                        variants={header}
                        initial='hidden'
                        animate='visible'
                    >Cross gym</motion.h1>
                    <motion.h2
                        variants={text}
                        initial='hidden'
                        animate='visible'
                    >Where the <span>yourney</span> begins</motion.h2>
                    <motion.button
                        variants={button}
                        initial='hidden'
                        animate='visible'
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1, background: 'white', color: 'black'}}
                    >
                    See more</motion.button>
                </div>
                <img className='triangle' src='images/vector_2.svg' alt='vector' />
            </section>
        </>
    )
}

export default Hero
