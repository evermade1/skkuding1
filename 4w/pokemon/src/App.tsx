import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';
import './App.css'
import { data } from './Data'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <nav className="text-[#FACC2E]">
          <h1><a href="/" className="navbar">Pokemon List</a></h1>
          <hr />
        </nav>
        <main>
          <Routes>
            <Route path='/' element={<PokemonList />} />
            <Route path='/detail/:id' element={<PokemonDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;