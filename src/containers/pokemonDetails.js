/* eslint-disable react/forbid-prop-types */
/* eslint-disable consistent-return */
/* eslint-disable max-len */

import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions/pokemon_actions';

const PokemonsDetails = ({ fetchPokemon, pokemonData }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }, []);

  if (pokemonData.loading) {
    return <h2>loading</h2>;
  }

  if (pokemonData.error) {
    return <h2>{pokemonData.error}</h2>;
  }

  if (pokemonData.pokemons) {
    return (
      <div className="container">
        <div className="d-flex mx-5 mt-5 justify-content-center ">
          <img className="mt-5" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />

          {!pokemonData.pokemons.stats ? (<h2>loading</h2>) : (
            <div className="pokemon-text">
              <h1>{pokemonData.pokemons.name.charAt(0).toUpperCase() + pokemonData.pokemons.name.slice(1)}</h1>
              <div>
                <p>
                  height:
                  {' '}
                  {pokemonData.pokemons.height * 10}
                  {' '}
                  cm
                </p>
                <p>
                  weight:
                  {' '}
                  {pokemonData.pokemons.weight * 0.1}
                  {' '}
                  kg
                </p>

              </div>
              <div>
                <p>
                  {pokemonData.pokemons.stats[0].stat.name}
                  :
                  {' '}
                  {pokemonData.pokemons.stats[0].base_stat}
                </p>
                <p>
                  {pokemonData.pokemons.stats[1].stat.name}
                  :
                  {' '}
                  {pokemonData.pokemons.stats[1].base_stat}
                </p>

              </div>
              <div>
                {' '}
                <p>
                  {pokemonData.pokemons.stats[2].stat.name}
                  :
                  {' '}
                  {pokemonData.pokemons.stats[2].base_stat}
                </p>
                <p>
                  {pokemonData.pokemons.stats[3].stat.name}
                  :
                  {' '}
                  { pokemonData.pokemons.stats[3].base_stat}
                </p>

              </div>
              <div>
                <p>
                  {pokemonData.pokemons.stats[4].stat.name}
                  :
                  {' '}
                  {pokemonData.pokemons.stats[4].base_stat}
                </p>
                <p>
                  {pokemonData.pokemons.stats[5].stat.name}
                  :
                  {' '}
                  {pokemonData.pokemons.stats[5].base_stat}
                </p>

              </div>
            </div>
          )}

        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  pokemonData: state.pokemons,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon: url => dispatch(fetchPokemons(url)),
});

PokemonsDetails.propTypes = {
  pokemonData: PropTypes.object.isRequired,
  fetchPokemon: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsDetails);
