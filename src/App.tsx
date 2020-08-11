import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './App.module.css';
import Dialogs from './components/dialogs/dialogs';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Profile from './components/userPage/user_page';
import { StateType, addPost } from './redux/state';

type PropsType = {
  state: StateType
  addPost: (message: string) => void
  addMessage: (message: string) => void
}

const App = (props: PropsType) => {

  return (
    <BrowserRouter>
      <div className={style.page}>
        <div><Header /></div>
        <Menu />
        <Route path="/user_page" render={() => <Profile
          posts={props.state.userPage} addPost={props.addPost} />} />
        <Route path="/dialogs" render={() => <Dialogs
          addMessage={props.addMessage}
          dialogsPage={props.state.dialogsPage} />} />
      </div>
    </BrowserRouter>
  )
}

export default App;
