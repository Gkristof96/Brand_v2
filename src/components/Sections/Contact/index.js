import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactCard from './ContactCard'
import { contactData } from '../../../data/contactinfo'
import SectionText from '../../SectionText'
import { containerVariants, cardVariants } from '../../../animations/animation'
import ListItem from './ListItem'
import Modal from './Modal'
 
const Contact = ({data}) => {
    const [modalOpen,setModelOpen] = useState(false)
    const controls = useAnimation();
    const { ref, inView } = useInView();
    
    //animation control
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
    }, [controls, inView]);

    const sendModal = () => setModelOpen(!modalOpen)

    return (
        <>
            <Modal modalOpen={modalOpen} sendModal={sendModal}/>
            <section ref={ref} className='contact section' id='contact'>
                <div className='container'>
                    <motion.div initial="hidden" animate={controls} variants={cardVariants}  className='contactcard'>
                        <ContactCard sendModal={sendModal}/>
                    </motion.div>
                    <div className='contact-info'>
                        <SectionText data={data} controls={controls}/>
                        <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                animate={controls}
                        >
                                {contactData.map((data,i) => ( <ListItem key={i} info={data.info} icon={data.icon} />))}
                        </motion.ul>
                    </div>
                </div>
                <img className='triangle' src='images/vector_3.svg' alt='vector' />
            </section>
        </>
    )
}

export default Contact
