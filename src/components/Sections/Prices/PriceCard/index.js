import React from 'react'

const PriceCard = ({image,name,description,price}) => {
    return (
        <>
            <div className='price-card'>
                <h1>{name}</h1>
                <img src={image} alt='price' />
                <p>{description}</p>
                <h2>{price}</h2>
            </div>
        </>
    )
}

export default PriceCard
