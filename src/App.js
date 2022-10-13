import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => (
  <Router>
    <Navbar />
    <AppWrapper>
      <Home />
    </AppWrapper>
  </Router>
);

const AppWrapper = styled.div`
  flex: 1;
`;

export default App;
