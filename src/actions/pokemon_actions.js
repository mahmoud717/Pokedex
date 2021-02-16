import axios from 'axios';
import { FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from './pokemon_action_types';

export const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonsSuccess = pokemons => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemons,
});

export const fetchPokemonsFaluire = error => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
});

export const fetchPokemons = url => (dispatch => {
  dispatch(fetchPokemonsRequest);
  axios.get(url)
    .then(response => {
      const pokemons = response.data;
      dispatch(fetchPokemonsSuccess(pokemons));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchPokemonsFaluire(errorMsg));
    });
});
