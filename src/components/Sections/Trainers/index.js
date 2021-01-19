import React from 'react'
import TrainerCard from './TrainerCard'
import { trainerData } from '../../../data/TrainersData'

const Trainers = () => {
    return (
        <>
            <section className='trainers section' id='trainers'>
                <div className='container'>
                    <div className='title'>
                        <h1>Our Trainers</h1>
                        <p>Meet our trainers, who has a lot year experiment is personal trainings</p>
                    </div>
                    <div className='trainers-cards'>
                        {trainerData.map((data,i) => (
                            <TrainerCard key={i} image={data.image} name={data.name} description={data.section} />
                        ))}
                    </div>
                </div>
                <img className='triangle' src='images/vector_2.svg' alt='vector' />
            </section>
        </>
    )
}

export default Trainers
