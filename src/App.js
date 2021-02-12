import './App.css'; import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import NotFound from './components/404';
import PokemonsContainer from './containers/pokemons';
import PokemonDetails from './containers/pokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokemons" element={<PokemonsContainer />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<NotFound />} />
          <Route path="/pokemons/:id" element={<PokemonDetails />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
