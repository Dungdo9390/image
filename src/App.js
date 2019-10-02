import React from 'react';
import './App.css';
import MainRouter from './config/router';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MenuBar from './components/menu-bar/menu-bar';
import ProfilePage from './pages/profile/profile';
import { locale } from './config/locale';
import Cookies from 'universal-cookie';
import { ListenService } from './services/listen';

class Abb extends React.Component {
  constructor(){
    super()
    let cookie = new Cookies()
    let lang = cookie.get('lang') === undefined ? 'vi' : cookie.get('lang')
    locale.setLanguage(lang)
  }

  componentDidMount(){
    let self = this
ListenService.onChangeLang().subscribe(
  () => {
    self.setState({})
  }
)
  }

  render() {
    return (
      <div className='App'>
        <MenuBar></MenuBar>
        <MainRouter></MainRouter>

        <ProfilePage></ProfilePage>
        <Footer></Footer>
        <div className='footer'></div>
      </div>
    )
  }
}

export default Abb;
