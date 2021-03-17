import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import Productos from './components/Productos';
import {productosData, productosDataDos} from './components/Productos/data';
import Promo from './components/Promo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Productos header="Elige tu Café de hoy" data={productosData} />
      <Promo />
      <Productos header="Para acompañar al Café:" parrafo="Medialunas especiales de la Casa" data={productosDataDos} />
      <Footer />
    </Router>
  );
}

export default App;
