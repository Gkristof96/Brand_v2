import React from 'react'
import TrainerCard from './TrainerCard'

const Trainers = () => {
    return (
        <>
            <section className='trainers section' id='trainers'>
                <div className='container'>
                    <div className='title'>
                        <h1>Our Trainers</h1>
                        <p>Meet our trainers, who has a lot year experiment is personal trainings</p>
                    </div>
                    <div className='trainers-container'>
                        <TrainerCard image={'images/trainer_1.jpg'} name={'Thomas Adam'} description={'Crossfit specialist'}/>
                        <TrainerCard image={'images/trainer_2.jpg'} name={'Rebecca Angels'} description={'Street Workout Trainer'}/>
                        <TrainerCard image={'images/trainer_3.jpg'} name={'Jacob Smith'} description={'Body Building Coach'}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trainers
