
//@ts-nocheck
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './App.module.css';
import DialogsContainer from './components/dialogs/dialogs_Container';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import UsersContainer from './components/users/users_container';
import ProfileContainer from './components/profilePage/profile_container';
import HeaderContainer from './components/header/header_container';
import Login from './components/login/login';



const App = () => {

  return (
    <BrowserRouter>
      <div className={style.page}>
        <div><HeaderContainer /></div>
        <Menu />
        <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
        <Route path="/dialogs" render={() =>  <DialogsContainer/>} />
        <Route path="/users" render={() =>  <UsersContainer/>} />
        <Route path="/login" render={() =>  <Login/>} />
      </div>
      </BrowserRouter>
  )
}


export default App;
