import { Link } from 'react-router-dom';
import background from '../assets/img/pokemon_background.png';

const Home = () => (
  <div className="d-flex justify-content-center align-items-center ">
    <div className="homepage-text ">
      <h1>
        Welcome to Pokedex
      </h1>
      <p>
        A place where you can find all information

        <br />

        about pokemons
      </p>
      <Link to="/pokemons" className="btn btn-warning ">
        View All pokemons
      </Link>

    </div>
    <img className="homepage-background mt-3" src={background} alt="background" />
  </div>
);

export default Home;
