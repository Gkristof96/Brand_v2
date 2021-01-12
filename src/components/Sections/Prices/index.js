import React from 'react'
import PriceCard from './PriceCard'

const Prices = () => {
    return (
        <>
            <section className='prices section' id='prices'>
                <div className='container'>
                    <div className='texts'>
                        <h1>Prices</h1>
                        <h2>Our membership packages</h2>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. s containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker incluLorem Ipsum has been the industry's standard dummy text ever ever.</p>
                    </div>
                    <div className='price-cards'>
                        <PriceCard price={'40$'} name={'Standard'} description={'to use body building equipments'} image={'images/standard.png'}/>
                        <PriceCard price={'20$'} name={'Cardio'} description={'to use cardio equipments'} image={'images/cardio.png'}/>
                        <PriceCard price={'50$'} name={'Premium'} description={'to use all equipment'} image={'images/premium.png'}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Prices
