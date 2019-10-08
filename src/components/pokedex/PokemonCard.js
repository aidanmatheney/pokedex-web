import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
  border-radius: 4px;
`;

const CardTitle = styled.div`
  font-weight: bold;
  text-align: center;

  padding: 1em;
  border-bottom: 1px solid black;
`;

const CardImg = styled.img`
  object-fit: contain;
`;

const PokemonCard = ({ pokemon }) => (
  <Container>
    <CardTitle>
      {pokemon.name}
    </CardTitle>

    <CardImg src={pokemon.image} alt={pokemon.name} />
  </Container>
);

export default PokemonCard;
