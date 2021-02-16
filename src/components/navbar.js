/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import pokedex from '../assets/img/Pokeball.png';

const Navbar = () => (
  <nav className="navbar color-white mb-0 ">
    <div className="container-fluid">
      <div className="d-flex align-items-center nav-left">
        <img src={pokedex} alt="" className="mr-5" />
        <Link to="/" className="mb-0 brand">Pokédex</Link>
      </div>
      <div className="nav-right ">
        <Link to="/">
          Home
        </Link>
        <Link to="/pokemons">
          Pokemons
        </Link>

        <Link to="/about">
          About
        </Link>

      </div>
    </div>
  </nav>
);

export default Navbar;
