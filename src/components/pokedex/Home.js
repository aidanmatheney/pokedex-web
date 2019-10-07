import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import { useDebouncedCallback } from 'use-debounce';

import SearchField from './SearchField';
import PokemonList from './PokemonList';
import HomePageNav from './HomePageNav';

import PokemonService from '../../services/PokemonService';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: green;

  padding: 1rem;

  height: 100%;
`;

const SearchContainer = styled.div`
  margin-bottom: 1rem;

  & > * {
    width: 100%;
  }
`;

const PokemonListContainer = styled.div`
  flex-grow: 1;

  overflow-y: auto;
`;

const NavContainer = styled.div`
  margin-top: 1rem;
`;

const pokemonService = new PokemonService();

const Home = () => {
  const [enteredSearch, setEnteredSearch] = useState('');
  const [displayedSearch, setDisplayedSearch] = useState('');
  const [setDisplayedSearchDebounced] = useDebouncedCallback(setDisplayedSearch, 200);

  const [pokemons, setPokemons] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  useEffect(() => {
    pokemonService.getPokemonsAsync(displayedSearch)
      .then(pokemons => {
        console.log(pokemons);
        setPokemons(pokemons);
      })
      .catch(console.error);
  }, [displayedSearch]); // Debounce subsequent

  const handleNavigateToPreviousPage = () => setCurrentPage(currentPage => currentPage - 1);
  const handleNavigateToNextPage = () => setCurrentPage(currentPage => currentPage + 1);

  const handleSearchFieldValueChange = newEnteredSearch => {
    setEnteredSearch(newEnteredSearch);
    setDisplayedSearchDebounced(newEnteredSearch);
  };

  return (
    <MainContainer>
      <SearchContainer>
        <SearchField value={enteredSearch} onValueChange={handleSearchFieldValueChange} />
      </SearchContainer>

      <PokemonListContainer>
        <PokemonList pokemons={pokemons} />
      </PokemonListContainer>

      <NavContainer>
        <HomePageNav previousPageAvailable={currentPage !== 0} nextPageAvailable={currentPage !== totalPages - 1} onNavigateToPreviousPage={handleNavigateToPreviousPage} onNavigateToNextPage={handleNavigateToNextPage} />
      </NavContainer>
    </MainContainer>
  );
};

export default Home;
