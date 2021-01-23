import React from 'react'
import { motion } from 'framer-motion'
import { priceVariants } from '../../../../animations/animation'

const PriceCard = ({image,name,description,price}) => {
    return (
        <>
            <motion.div variants={priceVariants}className='price-card'>
                <h1>{name}</h1>
                <img src={image} alt='price' />
                <p>{description}</p>
                <h2>{price}</h2>
            </motion.div>
        </>
    )
}

export default PriceCard
