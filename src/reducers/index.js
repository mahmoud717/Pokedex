import { combineReducers } from 'redux';
import pokemonReducer from './pokemons';

const rootReducer = combineReducers({
  Pokemons: pokemonReducer,
});

export default rootReducer;
