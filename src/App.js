import React from 'react';
import styled from 'styled-components/macro';

import Home from './components/pokedex/Home';

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
