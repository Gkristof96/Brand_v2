import React from 'react'

const TrainerCard = ({image, name, description}) => {
    return (
        <>
            <div className='trainer-card'>
                <img src={image} alt='trainer' />
                <h1>{name}</h1>
                <h2>{description}</h2>
            </div>
        </>
    )
}

export default TrainerCard
