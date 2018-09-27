import axios from 'axios';

const baseURL = `http://pokeapi.co/api/v2/pokemon/`;

export function getPokemon(id){
  return axios.get(baseURL + id).then((response) => {
    return response.data
  });
}