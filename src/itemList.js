import React from 'react'
import uniqid from 'uniqid'
import Item from './components/Item.jsx'
import placeholderImage from './assets/logo192.png'

const itemList = [
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Car'}
    description={
      'Quite a nice sports car. Good for showing off at the supermarket.'
    }
    price={2000}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Rubber Duck'}
    description={'Someone to explain your coding woes to.'}
    price={15}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Thrilling Book'}
    description={'A nice story to read by candle light.'}
    price={40}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Expensive Flatscreen'}
    description={'The more you pay the flatter it gets.'}
    price={24}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Radiant Curtains'}
    description={'Lovely curtains to brighten up your room.'}
    price={56}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'RGB Gaming Chair'}
    description={'Makes you 10% better at games.'}
    price={99}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Smooth Mousepad'}
    description={'Makes you 15% better at games.'}
    price={123}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'4K Monitor'}
    description={'Dazzles you with vibrant colors.'}
    price={22}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Apple'}
    description={"It's an apple."}
    price={10}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Banana'}
    description={"It's a banana."}
    price={10}
  />,
  <Item
    key={uniqid()}
    imagePath={placeholderImage}
    name={'Ancient Artifact'}
    description={'A mysterious treasure from the past.'}
    price={10}
  />
]

export default itemList
