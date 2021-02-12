/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import { useParams } from 'react-router-dom';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions/pokemon_actions';

const PokemonsDetails = ({ fetchPokemon, pokemonData }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }, []);

  return pokemonData.loading ? (
    <h2>loading</h2>
  ) : pokemonData.error ? (
    <h2>{pokemonData.error}</h2>
  ) : (
    <div>
      <h2>pokemon list</h2>

      <div>

        <p>{pokemonData.pokemons.name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />

      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  pokemonData: state.Pokemons,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon: url => dispatch(fetchPokemons(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsDetails);
