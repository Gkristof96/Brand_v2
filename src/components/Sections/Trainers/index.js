import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TrainerCard from './TrainerCard'
import { trainerData } from '../../../data/TrainersData'
import { titleVariants_1, textVariants } from '../../../animations/animation'

const Trainers = () => {
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
    return (
        <>
            <section ref={ref} className='trainers section' id='trainers'>
                <div className='container'>
                    <div className='title'>
                        <motion.h1 initial="hidden" animate={controls} variants={titleVariants_1}>Our Trainers</motion.h1>
                        <motion.p  initial="hidden" animate={controls} variants={textVariants}>Meet our trainers, who has a lot year experiment is personal trainings</motion.p>
                    </div>
                    <div className='trainers-cards'>
                        {trainerData.map((data,i) => (
                            <TrainerCard controls={controls} key={i} image={data.image} name={data.name} description={data.section} />
                        ))}
                    </div>
                </div>
                <img className='triangle' src='images/vector_2.svg' alt='vector' />
            </section>
        </>
    )
}

export default Trainers
