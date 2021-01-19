import React from 'react'
import { IoBarbell, IoBicycleSharp } from 'react-icons/io5'
import SectionText from '../../SectionText'
import { FaWeight } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { motion } from 'framer-motion'

const image = {
    hidden: {
        y: '100px'
    },
    visible: {
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const Services = ({data}) => {
    return (
        <>
            <section className='services section' id='services'>
                <div className='container'>
                    <div className='services-info'>
                        <SectionText data={data}/>
                        <ul>
                            <li><IoBarbell className='icon'/>Premium gym equipment</li>
                            <li><IoBicycleSharp className='icon'/>Cardio area</li>
                            <li><FaWeight className='icon'/>Body weight loss trainings</li>
                            <li><BiArea className='icon'/>Large working area</li>
                            <li><AiFillSafetyCertificate className='icon'/>Professional trainers</li>
                        </ul>
                    </div>
                    <motion.img src='images/services.jpg' alt='services' 
                        variants={image}
                        initial='hidden'
                        animate='visible'
                    />
                </div>
            </section>
        </>
    )
}

export default Services
