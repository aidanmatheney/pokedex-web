import React from 'react';
import styled from 'styled-components/macro';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
`;

const TitleContainer = styled.div`
  font-weight: bold;
  padding: 1em;

  /* display: flex;
  flex-direction: column; */
  /* align-content: center; */
  /* justify-content: center; */

  border-bottom: 1px solid black;
`;


const ImageContainer = styled.div`
  flex-grow: 1;
`;

const PokemonCard = ({ pokemon }) => (
  <CardContainer>
    <TitleContainer>
      {pokemon.name}
    </TitleContainer>

    <ImageContainer>
      <img src={pokemon.image} alt={pokemon.name} />
    </ImageContainer>
  </CardContainer>
);

export default PokemonCard;
