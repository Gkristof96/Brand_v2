import React from 'react'
import { motion } from 'framer-motion'


const cardVariants = {
    hidden: {
        rotateY: 90,
        opacity: 0
    },
    visible: {
        rotateY: 0,
        opacity: 1,
        transition: {
            delay: 1.25,
            duratin: 5
        }
    }
}
const TrainerCard = ({image, name, description, controls}) => {
    return (
        <>
            <motion.div variants={cardVariants} initial='hidden' animate={controls} className='trainer-card'>
                <img src={image} alt='trainer' />
                <h1>{name}</h1>
                <h2>{description}</h2>
            </motion.div>
        </>
    )
}

export default TrainerCard
