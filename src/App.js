import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Result from './pages/Result';
import Favoritos from './pages/Favoritos'
import Page404 from './pages/Page404';
import './styles/global.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="resultado" element={<Result />} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
