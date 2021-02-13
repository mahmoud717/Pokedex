import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemonName, pokemonId }) => (
  <div className=" col-4">
    <div className="pokemon-card justify-content-center d-flex flex-column align-items-center ">
      <Link to={`/pokemons/${pokemonId}`}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} alt="" loading="lazy" />
        <p className="text-center">{pokemonName}</p>
      </Link>
    </div>
  </div>

);

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonId: PropTypes.number.isRequired,

};

export default PokemonCard;
