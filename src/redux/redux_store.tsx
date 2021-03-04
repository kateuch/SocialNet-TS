//@ts-nocheck
import { combineReducers, createStore } from 'redux';
import profile_reducer from './profile_reducer';
import dialogs_reducer from './dialog_reducer';
import users_reducer from './users_reducer';

let reducers = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    usersPage: users_reducer

});

let store = createStore(reducers);

export type RootStateType = ReturnType<typeof reducers>;
window.store = store;

export default store;