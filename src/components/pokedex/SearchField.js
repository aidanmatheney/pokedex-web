import React, { useRef } from 'react'
import styled from 'styled-components/macro';

import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  /* border: 1px solid white; */
  background: blue;
  border-radius: 5px;

  padding: 5px;
`;

const SearchIcon = styled(props => <FaSearch color='white' {...props} />)`
  align-self: center;
  margin: 4px;
`;

const InputElement = styled.input`
  flex-grow: 1;

  margin: 4px;

  color: white;
  font-size: 1em;
  font-weight: bolder;

  background: none;
  border: none;
  outline: none;
`;

const SearchField = ({ value, onValueChange }) => {
  const inputElement = useRef();

  const handleValueChange = event => {
    onValueChange && onValueChange(event.target.value);
  };

  return (
    <Container>
      <SearchIcon onClick={() => inputElement.current.focus()} />

      <InputElement value={value} placeholder='Search Pokédex'
        onChange={handleValueChange} ref={inputElement} />
    </Container>
  );
};

export default SearchField;
