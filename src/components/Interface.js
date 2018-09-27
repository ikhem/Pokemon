import React from 'react'

const Interface = ({ handleChange, fetchPokemon }) => {
  return (
    <div>
      <input 
        placeholder="poke-search" 
        onChange={handleChange}
      />
      <button 
        onClick={fetchPokemon}
      >
        Search
      </button>
    </div>
  );
}

export default Interface;
          
         