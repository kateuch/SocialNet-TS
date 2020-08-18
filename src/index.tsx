import { store, StateType } from './redux/store';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
