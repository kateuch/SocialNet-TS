
//@ts-nocheck
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Profile from './components/profilePage/profile_page';
import UsersContainer from './components/users/users_container';
import { RootStateType } from './redux/redux_store';
import { ActionsTypes } from './redux/store';
import DialogsContainer from './components/dialogs/dialogs_Container';




const App = () => {

  return (
    <BrowserRouter>
      <div className={style.page}>
        <div><Header /></div>
        <Menu />
        <Route path="/profile_page" render={() => <Profile/>} />
        <Route path="/dialogs" render={() =>  <DialogsContainer/>} />
        <Route path="/users" render={() =>  <UsersContainer/>} />
      </div>
      </BrowserRouter>
  )
}


export default App;
