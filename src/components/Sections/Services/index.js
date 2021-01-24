import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionText from '../../SectionText'
import { serviceData } from '../../../data/services'
import { containerVariants } from '../../../animations/animation'
import ListItem from '../Contact/ListItem'
import { imageVariants } from '../../../animations/animation'

const Services = ({data}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
    }, [controls, inView]);
    return (
        <>
            <section ref={ref} className='services section' id='services'>
                <div className='container'>
                    <div className='services-info'>
                        <SectionText data={data} controls={controls}/>
                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                animate={controls}
                            >
                                {serviceData.map((data,i) => ( <ListItem key={i} info={data.info} icon={data.icon} />))}
                            </motion.ul>
                        </div>
                        <motion.img src='images/services.jpg' alt='services' 
                            variants={imageVariants}
                            initial='hidden'
                            animate={controls}
                        />
                </div>
            </section>
        </>
    )
}

export default Services
