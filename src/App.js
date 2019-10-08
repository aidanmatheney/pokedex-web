import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro';

import Home from './components/pokedex/Home';
import Pokemon from './components/pokedex/Pokemon';

const Container = styled.div`
  height: 100vh;
`;

const App = () => (
  <Container>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/:id" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  </Container>
);

export default App;
