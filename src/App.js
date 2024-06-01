import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      setPokemons(response.data.results.map(p => p.name));
    } catch (error) {
      console.error('Hubo un error al obtener los datos de los Pokémon:', error);
    }
  };

 // useEffect(() => {
    // Llamamos a fetchPokemons aquí para cargar los datos al montar el componente
   // fetchPokemons();
  //}, []);
  return (
    <div>
      <button onClick={() => fetchPokemons()}>Fetch Pokemon</button>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;