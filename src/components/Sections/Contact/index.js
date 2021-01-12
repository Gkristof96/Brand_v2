import React from 'react'
import ContactCard from './ContactCard'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

const Contact = () => {
    return (
        <>
            <section className='contact section' id='contact'>
                <div className='container'>
                    <ContactCard />
                    <div className='contact-info'>
                        <h1>Contact</h1>
                        <h2>Send us a message</h2>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. s containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker incluLorem Ipsum has been the industry's standard dummy text ever ever.</p>
                        <ul>
                            <li><FaPhoneAlt className='icon'/>+36 92 123 456</li>
                            <li><FaEnvelope className='icon'/>crossgym@crossgym.com</li>
                            <li><FaMapMarkerAlt className='icon'/>Budapest, Kossuth u. 23 1151</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
