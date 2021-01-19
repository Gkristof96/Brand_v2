import React from 'react'
import PriceCard from './PriceCard'
import SectionText from '../../SectionText'
import { priceData } from '../../../data/priceData'

const Prices = ({data}) => {
    return (
        <>
            <section className='prices section' id='prices'>
                <div className='container'>
                    <div className='texts'>
                        <SectionText data={data}/>
                    </div>
                    <div className='price-cards'>
                        {priceData.map((data, i) => (
                            <PriceCard key={i} price={data.price} name={data.title} description={data.description} image={data.image}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Prices
