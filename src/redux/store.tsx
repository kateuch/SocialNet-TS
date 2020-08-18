import { v1 } from 'uuid';
import profile_reducer, { AddPostActionType, NewPostActionType } from './profile_reducer';
import  dialogs_reducer, {NewMessageActionType, AddMessageActionType} from './dialog_reducer';

export type DialogItemType = {
    id: string
    name: string
};
export type MessageItemType = {
    id: string
    message: string
};
export type PostType = {
    id: string
    message: string
    likeCount: string
};
export type UserPageType = {
    posts: Array<PostType>
    newPostText: string
};
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessage: string
};
export type StateType = {
    userPage: UserPageType
    dialogsPage: DialogsPageType
};

export type  ActionType = AddPostActionType | NewPostActionType | NewMessageActionType | AddMessageActionType

export type StoreType = {
    _state: StateType
    dispatch: (action: ActionType) => void
    subscribe: (observer: (state:StateType) => void) => void
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
};

export const store: StoreType = {

    _state: {
        userPage: {
            posts: [
                { id: v1(), message: 'Salute! 🖖', likeCount: '17' },
                { id: v1(), message: 'Bye-bye 🎃', likeCount: '20' }
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                { id: v1(), name: 'Andrew' },
                { id: v1(), name: 'Mary' },
                { id: v1(), name: 'Lika' },
                { id: v1(), name: 'Johnata' }
            ],
            messages: [
                { id: v1(), message: 'Privet!' },
                { id: v1(), message: "What's up?!" },
                { id: v1(), message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
                { id: v1(), message: 'Suscipit aliquid quis nisi, corporis voluptate culpa!' }
            ],
            newMessage: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State changed")
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {

        this._state.userPage = profile_reducer(this._state.userPage, action);
        this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action);

         this._callSubscriber(this._state);
    }
};







