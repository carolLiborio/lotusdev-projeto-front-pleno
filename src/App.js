import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Result from './pages/Result';
import './styles/global.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resultado" element={<Result />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
