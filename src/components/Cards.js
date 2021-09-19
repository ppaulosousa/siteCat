import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (
        <div className='cards'>
            <h1>Minhas coisinhas para vender COMPREM :)</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                    <CardItem
              src='images/img-9.jpg'
              text='Não sei o que escrever então vai algo para o teste'
              label='Teste'
              path='/order'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Não sei o que escrever então vai algo para o teste'
              label='Teste'
              path='/order'
            />
          </ul>
          <ul className='cards-items'>
            <CardItem
              src='images/img-3.jpg'
              text='Não sei o que escrever então vai algo para o teste'
              label='Teste'
              path='/order'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Não sei o que escrever então vai algo para o teste'
              label='Teste'
              path='/arts'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Não sei o que escrever então vai algo para o teste'
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
