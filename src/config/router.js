import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/login/login';
import ProfilePage from '../pages/profile/profile';
import DashboardPage from '../pages/dashboard/dashboard';
import TuyenDung from '../pages/tuyen-dung/tuyen-dung';
import Auth from '../services/auth/auth';


const MainRouter = () => (
    <main>

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={
                        () => (
                            <Auth orRedirectTo='/login' orRender={
                                <ProfilePage></ProfilePage>
                            }></Auth>
                        )

                    }></Route>
                    <Route path='/login' exact component={ LoginPage}></Route>
                    <Route path='/gioi-thieu' exact component={ ProfilePage}></Route>
                    <Route path='/dashboard' exact component={ DashboardPage}></Route>
                    <Route path='/home' exact component={ HomePage}></Route>
                    <Route path='/tuyen-dung' component={ TuyenDung}></Route>
                </Switch>
            </BrowserRouter>
        
    
</main>
)

export default MainRouter