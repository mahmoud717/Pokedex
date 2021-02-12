/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPokemons } from '../actions/pokemon_actions';
import changePagination from "../actions/pagination_actions";

const PokemonsContainer = ({
  fetchPokemons, pokemonsData, changePagination, paginationData,
}) => {
  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${paginationData.start}&limit=${paginationData.limit}`);
  }, [paginationData.start]);

  const handleClick = e => {
    if (e.target.className.includes("next")) {
      changePagination(paginationData.start + 30);
    } else if (e.target.className.includes("previous") && paginationData.start > 0) {
      changePagination(paginationData.start - 30);
    }
  };

  return pokemonsData.loading ? (
    <h2 className="loading">loading</h2>
  ) : pokemonsData.error ? (
    <h2 className="error">{pokemonsData.error}</h2>
  ) : (
    <div className="pokemon-container container my-3 d-flex flex-column align-items-center">
      <div className="pokemon-list d-flex row justify-content-between ">
        {pokemonsData && pokemonsData.pokemons.results && pokemonsData.pokemons.results.map((pokemon, id) => (
          <div className="pokemon-card justify-content-center d-flex flex-column align-items-center col-4 ">
            <Link to={`/pokemons/${(id + paginationData.start + 1)}`}>

              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id + paginationData.start + 1}.png`} alt="" loading="lazy" />
              <p className="text-center">{pokemon.name}</p>
            </Link>
          </div>

        ))}

      </div>
      <div>
        <button className="btn btn-secondary previous mr-4" type="button" onClick={handleClick}>previous</button>
        <button className="btn btn-success next m-3" type="button" onClick={handleClick}>next</button>
      </div>
    </div>

  );
};

const mapStateToProps = state => ({
  pokemonsData: state.Pokemons,
  paginationData: state.pagination,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: url => dispatch(fetchPokemons(url)),
  changePagination: start => dispatch(changePagination(start)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
