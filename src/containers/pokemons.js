/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchPokemons } from '../actions/pokemon_actions';
import changePagination from "../actions/pagination_actions";
import { changeFilter } from '../actions/filter_action';
import Filter from "../components/filter";
import PokemonCard from "../components/pokemonCard";

const PokemonsContainer = ({
  fetchPokemons, pokemonsData, changePagination, paginationData, filterData, changeFilter,
}) => {
  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${paginationData.start}&limit=${paginationData.limit}`);
  }, [paginationData.start, filterData]);

  const handleClick = e => {
    if (e.target.className.includes("next")) {
      changePagination(paginationData.start + 30);
    } else if (e.target.className.includes("previous") && paginationData.start > 0) {
      changePagination(paginationData.start - 30);
    }
  };

  // const handleFilter = filter => {
  //   console.log(filterData);
  //   changeFilter(filter);
  // };

  if (pokemonsData.loading || !pokemonsData.pokemons.results) {
    return <h2 className="loading">loading</h2>;
  }

  if (pokemonsData.error) {
    return <h2 className="error">{pokemonsData.error}</h2>;
  }
  if (pokemonsData.pokemons.results) {
    const filtered = (filterData === "" ? pokemonsData.pokemons.results : pokemonsData.pokemons.results.filter(pokemon => pokemon.name.includes(filterData)));

    return (
      <div className="container-fluid m-0 p-0 yellow">
        <div className="pokemon-container container mb-0 p-5 d-flex flex-column align-items-center">
          <Filter changeFilter={changeFilter} />
          <div className="pokemon-list d-flex row justify-content-between w-100 ">
            {filtered === <h2 className="loading">loading</h2> ? null : pokemonsData && pokemonsData.pokemons.results && filtered.map((pokemon, id) => <PokemonCard pokemonName={pokemon.name} pokemonId={paginationData.start + 1 + id} />)}
          </div>

          <div>
            <button className="btn btn-secondary previous mr-4" type="button" onClick={handleClick}>previous</button>
            <button className="btn btn-success next m-3" type="button" onClick={handleClick}>next</button>
          </div>
        </div>
      </div>

    );
  }
};

const mapStateToProps = state => ({
  pokemonsData: state.pokemons,
  paginationData: state.pagination,
  filterData: state.filter.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: url => dispatch(fetchPokemons(url)),
  changePagination: start => dispatch(changePagination(start)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

PokemonsContainer.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  changePagination: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filterData: PropTypes.object.isRequired,
  paginationData: PropTypes.object.isRequired,
  pokemonsData: PropTypes.object.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
