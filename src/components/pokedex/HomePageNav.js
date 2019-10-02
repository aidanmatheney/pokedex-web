import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  & > * {
    margin-left: .5rem;
    margin-right: .5rem;
  }
`;



const HomePageNav = ({ previousPageAvailable, nextPageAvailable, onNavigateToPreviousPage, onNavigateToNextPage }) => {
  const handlePreviousPageButtonClick = () => {
    onNavigateToPreviousPage();
  };

  const handleNextPageButtonClick = () => {
    onNavigateToNextPage();
  };

  return (
    <Container>
      <button type='button' disabled={!previousPageAvailable} onClick={previousPageAvailable ? handlePreviousPageButtonClick : null}>{'<'}</button>
      <button type='button' disabled={!nextPageAvailable} onClick={nextPageAvailable ? handleNextPageButtonClick : null}>{'>'}</button>
    </Container>
  );
}

export default HomePageNav;
