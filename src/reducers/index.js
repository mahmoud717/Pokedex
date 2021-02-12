import { combineReducers } from 'redux';
import pokemonReducer from './pokemons';
import PaginationReducer from './pagination';

const rootReducer = combineReducers({
  Pokemons: pokemonReducer,
  pagination: PaginationReducer,
});

export default rootReducer;
