import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/login/login';
import ProfilePage from '../pages/profile/profile';
import DashboardPage from '../pages/dashboard/dashboard';

class MainRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={LoginPage}></Route>
                    <Route path='/login' exact component={LoginPage}></Route>
                    <Route path='/profile' exact component={ProfilePage}></Route>
                    <Route path='/dashboard' exact component={DashboardPage}></Route>
                    <Route path='/home' exact component={HomePage}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MainRouter