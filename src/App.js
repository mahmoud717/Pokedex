import './App.css'; import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import PokemonsContainer from './containers/pokemons';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokemons" element={<PokemonsContainer />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
