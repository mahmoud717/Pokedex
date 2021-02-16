import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/filter_action';

const PokemonCard = ({ pokemonName, pokemonUrl, changeFilter }) => {
  const fullUrl = pokemonUrl; // "https://pokeapi.co/api/v2/pokemon/2/"
  const urlArray = fullUrl.split('/');
  const pokemonId = urlArray[urlArray.length - 2];

  return (
    <div className=" col-4">
      <div className="pokemon-card justify-content-center d-flex flex-column align-items-center ">
        <Link to={`/pokemons/${pokemonId}`} onClick={() => { changeFilter(''); }}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} alt="" loading="lazy" />
          <p className="text-center">{pokemonName}</p>
        </Link>
      </div>
    </div>

  );
};

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonUrl: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,

};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(null, mapDispatchToProps)(PokemonCard);
