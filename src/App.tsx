
//@ts-nocheck
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './App.module.css';
import DialogsContainer from './components/dialogs/dialogs_Container';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import UsersContainer from './components/users/users_container';
import ProfileContainer from './components/profilePage/profile_container';



const App = () => {

  return (
    <BrowserRouter>
      <div className={style.page}>
        <div><Header /></div>
        <Menu />
        <Route path="/profile" render={() => <ProfileContainer/>} />
        <Route path="/dialogs" render={() =>  <DialogsContainer/>} />
        <Route path="/users" render={() =>  <UsersContainer/>} />
      </div>
      </BrowserRouter>
  )
}


export default App;
