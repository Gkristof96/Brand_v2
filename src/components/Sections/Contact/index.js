import React from 'react'
import ContactCard from './ContactCard'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
import SectionText from '../../SectionText'

const Contact = ({data}) => {
    return (
        <>
            <section className='contact section' id='contact'>
                <div className='container'>
                    <ContactCard />
                    <div className='contact-info'>
                        <SectionText data={data}/>
                        <ul>
                            <li><FaPhoneAlt className='icon'/>+36 92 123 456</li>
                            <li><FaEnvelope className='icon'/>crossgym@crossgym.com</li>
                            <li><FaMapMarkerAlt className='icon'/>Budapest, Kossuth u. 23 1151</li>
                        </ul>
                    </div>
                </div>
                <img className='triangle' src='images/vector_3.svg' alt='vector' />
            </section>
        </>
    )
}

export default Contact
