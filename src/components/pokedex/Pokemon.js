import React, { useState, useEffect } from 'react';

import PokemonService from '../../services/PokemonService';

const pokemonService = new PokemonService();

const Pokemon = ({ match }) => {
  const pokemonId = match.params.id;

  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    pokemonService.getPokemonAsync(pokemonId)
      .then(pokemon => {
        console.log(pokemon);
        setPokemon(pokemon);
      })
      .catch(console.error);
  }, [pokemonId]);

  return (
    <>
      <div>Pokemon: </div>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </>
  );
};

export default Pokemon;
