import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/navbar';
import Home from './pages/homePage';
import Results from './pages/resultsPage';
import React, { useState, useEffect } from 'react'
import { RiskPredictionProvider } from './context/RiskPredictionContext';

function App() {
  return (
    <ChakraProvider bg='brand.100'>
      <RiskPredictionProvider>
        <Navbar />
        <Home />
        <Results />
      </RiskPredictionProvider>
    </ChakraProvider>
  );
}

export default App;
