import React from 'react';
import '../Pokemon.css';

const Screen = ({ img }) => {
  console.log('img', img)
  return (
    <div className="picView">
      <img src={img} alt='pokemon_image' />
    </div>
  );
};

export default Screen;