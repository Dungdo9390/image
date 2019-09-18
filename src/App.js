import React from 'react';
import './App.css';
import MainRouter from './config/router';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MenuBar from './components/menu-bar/menu-bar';
import ProfilePage from './pages/profile/profile';

function Abb() {
  return (
    <div className='App'>
      <MenuBar></MenuBar>
      <MainRouter></MainRouter>
      <Header></Header>
      <ProfilePage></ProfilePage>
      <Footer></Footer>
      <div className='footer'></div>
    </div>
  );
}

export default Abb;
