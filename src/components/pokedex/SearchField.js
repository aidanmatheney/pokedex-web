import React from 'react'
import styled from 'styled-components/macro';

const InputElement = styled.input`
  /* width: 100%; */
`;

const SearchField = props => {
  const handleValueChange = event => {
    props.onValueChange(event.target.value);
  };

  return (
    <InputElement value={props.value} placeholder='Search Pokédex' onChange={handleValueChange} />
  );
};

export default SearchField;
