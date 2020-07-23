import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from '../App';
import  { addPost, addMessage } from '../redux/state';
import {StateType} from './state'


export function rerenderEntireTree (state: StateType) {
    ReactDOM.render(
        <BrowserRouter>
         <App state={state} addPost={addPost} addMessage={addMessage}/>
       </BrowserRouter>,
       document.getElementById('root')
     );
};