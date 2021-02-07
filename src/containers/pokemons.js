/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions/pokemon_actions';

const PokemonsContainer = ({ fetchPokemons, pokemonsData }) => {
  useEffect(() => {
    fetchPokemons('https://jsonplaceholder.typicode.com/users');
  }, []);
  return pokemonsData.loading ? (
    <h2>loading</h2>
  ) : pokemonsData.error ? (
    <h2>{pokemonsData.error}</h2>
  ) : (
    <div>
      <h2>pokemon list</h2>
      <div>
        {pokemonsData && pokemonsData.pokemons && pokemonsData.pokemons.map(pokemon => <p>{pokemon.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  pokemonsData: state.Pokemons,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: url => dispatch(fetchPokemons(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
