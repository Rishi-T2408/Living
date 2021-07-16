import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    //Here I have to just change the image contest
  return (
    <div className='cards'>
     
      <div className='cards__container'>
        <div className='cards__wrapper'>

        <h1 className="allblog2">Categories</h1> 

<ul className='cards__items'>
  <CardItem
    src='images/immune.png'
    text='Read about best immunity boosters'
    label='Immunity booster'
    path='/immunity'
  />
  <CardItem
    src='images/fruit.png'
    text='Get fruity and delight'
    label='Fruit benefits'
    path='/fruit'
  />
</ul>
<ul className='cards__items'>
  <CardItem
    src='images/protein.png'
    text='Be healthy with protein diets'
    label='Plant Protein'
    path='/protein'
  />
  <CardItem
    src='images/weight.png'
    text='Lose your weight with natural weight killers'
    label='Weight killer'
    path='/weight'
  />
</ul>


        <h1 className="allblog2">Diets for you</h1> 
        <ul className='cards__items'>
            <CardItem
              src='images/deit.png'
              text='Read about the perfect balanced diet'
              label='Balanced diet'
              path='/services'
            />
            <CardItem
              src='images/deit2.png'
              text='Add proteins in your deits became healthy '
              label='Protein deit'
              path='/'
            />
            <CardItem
              src='images/deit4.png'
              text='Loose weight and stay fit with this deit'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>





                 </div>
      </div>
    </div>
  );
}

export default Cards;