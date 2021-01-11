import React from 'react'
import { IoBarbell, IoBicycleSharp } from 'react-icons/io5'
import { FaWeight } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'
import { AiFillSafetyCertificate } from 'react-icons/ai'


const Services = () => {
    return (
        <>
            <section className='services section'>
                <div className='container'>
                    <div className='left-bar'>
                        <h1>Services</h1>
                        <h2>What we offer</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <ul>
                            <li><IoBarbell className='icon'/>Premium gym equipment</li>
                            <li><IoBicycleSharp className='icon'/>Cardio area</li>
                            <li><FaWeight className='icon'/>Body weight loss trainings</li>
                            <li><BiArea className='icon'/>Large working area</li>
                            <li><AiFillSafetyCertificate className='icon'/>Professional trainers</li>
                        </ul>
                    </div>
                    <img src='images/services.jpg' alt='services' />
                </div>
            </section>
        </>
    )
}

export default Services
