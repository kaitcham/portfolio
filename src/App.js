import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppWrapper>
        <Home />
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`
  flex: 1;
  margin-top: 4rem;
`;

export default App;
