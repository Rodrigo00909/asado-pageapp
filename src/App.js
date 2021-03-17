import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import Productos from './components/Productos';
import {productosData} from './components/Productos/data';
import Promo from './components/Promo';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Productos header="Elige tu Café de hoy" data={productosData} />
      <Promo />
    </Router>
  );
}

export default App;
