import { combineReducers } from 'redux';
import pokemonReducer from './pokemons';
import PaginationReducer from './pagination';
import filterReducer from './filter';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  pagination: PaginationReducer,
  filter: filterReducer,

});

export default rootReducer;
