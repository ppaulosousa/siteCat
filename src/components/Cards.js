import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (
        <div className='cards'>
            <h1>My shit post</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                    <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Teste'
              path='/order'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Teste'
              path='/order'
            />
          </ul>
          <ul className='cards-items'>
            <CardItem
              src='images/img-3.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Teste'
              path='/order'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Teste'
              path='/arts'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Teste'
              path='/architecture'
            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
