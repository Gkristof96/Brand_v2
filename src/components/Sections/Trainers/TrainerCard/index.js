import React from 'react'
import { motion } from 'framer-motion'
import { trainerCardVariants } from '../../../../animations/animation'

const TrainerCard = ({image, name, description, controls}) => {
    return (
        <>
            <motion.div variants={trainerCardVariants} initial='hidden' animate={controls} className='trainer-card'>
                <img src={image} alt='trainer' height='100%' width='100%' />
                <h1>{name}</h1>
                <h2>{description}</h2>
            </motion.div>
        </>
    )
}

export default TrainerCard
