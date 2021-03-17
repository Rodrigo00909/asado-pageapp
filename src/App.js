import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import Productos from './components/Productos';
import {productosData} from './components/Productos/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Productos header="Elige tu Café de hoy" data={productosData} />
    </Router>
  );
}

export default App;
