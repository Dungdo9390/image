import React from 'react';
import './App.css';
import MainRouter from './config/router';

function Abb() {
  return (
<div className='App'>
<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/login">Navbar</a>
          </nav>
  <MainRouter></MainRouter>
</div>
  );
}

export default Abb;
 