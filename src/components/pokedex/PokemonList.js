import React from 'react';
import styled from 'styled-components/macro';

import PokemonCard from './PokemonCard';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  grid-gap: .5rem;
`;

const PokemonList = props => (
  <CardsContainer>
    {props.pokemons.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </CardsContainer>
);

export default PokemonList;
