import React from 'react';
import './App.css';
import MainRouter from './config/router';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function Abb() {
  return (
    <div className='App'>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/login">Navbar</a>
      </nav>
      <MainRouter></MainRouter>
      <Header></Header>
      <Footer></Footer>
      <div className='footer'></div>
    </div>
  );
}

export default Abb;
