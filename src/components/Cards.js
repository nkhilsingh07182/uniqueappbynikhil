import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CHECK OUT ADDVANTURE LIFE </h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://lp-cms-production.imgix.net/features/2019/05/Solo-Travel-in-Nature-acbfea52bfaf.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://static.toiimg.com/photo/76420840.cms'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://lp-cms-production.imgix.net/features/2019/05/Solo-Travel-in-Nature-acbfea52bfaf.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://res.cloudinary.com/grohealth/image/upload/q_30/v1581674833/DCUK/Content/Plane-3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
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