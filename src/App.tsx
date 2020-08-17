import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './App.module.css';
import Dialogs from './components/dialogs/dialogs';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Profile from './components/userPage/user_page';
import { StateType, StoreType, ActionType } from './redux/state';

type PropsType = {
  store: StoreType
  state: StateType
  dispatch: (action: ActionType) => void
}

const App = (props: PropsType) => {

  return (
    <BrowserRouter>
      <div className={style.page}>
        <div><Header /></div>
        <Menu />
        <Route path="/user_page" render={() => <Profile
          posts={props.state.userPage} dispatch={props.dispatch} />} />
        <Route path="/dialogs" render={() => <Dialogs
          dispatch={props.dispatch} store={props.store} />} />
      </div>
    </BrowserRouter>
  )
}


export default App;
