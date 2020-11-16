import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Result from './pages/Result';
import Page404 from './pages/Page404';
import './styles/global.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="login" exact element={<Login />} />
        <Route path="resultado" element={<Result />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
