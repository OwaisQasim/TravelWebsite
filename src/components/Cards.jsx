import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

export default function Cards() {
    return (
        <div className='cards'>
            <h1>Checkout these EPIC destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep 
                        inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />



                        <CardItems
                            src='images/img-5.jpg'
                            text='Travel throught the Islands of Bali in Private 
                            cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItems
                            src='images/img-2.jpg'
                            text='Travel throught the Islands of Bali in Private 
                            cruise'
                            label='Adventure'
                            path='/services'
                        />



                        <CardItems
                            src='images/img-3.jpg'
                            text='Travel throught the Islands of Bali in Private 
                            cruise'
                            label='Luxury'
                            path='/services'
                        />

                        <CardItems
                            src='images/img-4.jpg'
                            text='Travel throught the Islands of Bali in Private 
                            cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
