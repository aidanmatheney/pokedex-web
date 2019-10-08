import React from 'react';
import styled from 'styled-components/macro';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-left: .5rem;
  margin-right: .5rem;
`;

const NavButton = styled(props => (
  <button type='button' {...props} />
))`
  background: none;
  border: none;
  outline: none;

  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HomePageNav = ({
  isPreviousPageAvailable, isNextPageAvailable,
  onNavigateToPreviousPage, onNavigateToNextPage
}) => {
  const handlePreviousPageButtonClick = () => {
    onNavigateToPreviousPage();
  };

  const handleNextPageButtonClick = () => {
    onNavigateToNextPage();
  };

  return (
    <Container>
      <NavButton disabled={!isPreviousPageAvailable} onClick={isPreviousPageAvailable ? handlePreviousPageButtonClick : null}>
        <FaChevronLeft />
      </NavButton>

      <NavButton disabled={!isNextPageAvailable} onClick={isNextPageAvailable ? handleNextPageButtonClick : null}>
        <FaChevronRight />
      </NavButton>
    </Container>
  );
}

export default HomePageNav;
