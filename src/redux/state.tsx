import { v1 } from 'uuid';

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

type AddPostActionType = {
    type: typeof ADD_POST
};
type NewPostActionType = {
    type: typeof NEW_POST_TEXT
    post: string
};
type NewMessageActionType = {
    type: typeof NEW_MESSAGE
    messageText: string
};
type AddMessageActionType = {
    type: typeof ADD_MESSAGE
};
export type  ActionType = AddPostActionType | NewPostActionType | NewMessageActionType | AddMessageActionType

export type StoreType = {
    _state: StateType
    dispatch: (action: ActionType) => void
    subscribe: (observer: (state:StateType) => void) => void
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
};

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

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
         if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: v1(),
                message: this._state.userPage.newPostText,
                likeCount: "0"
            };
            this._state.userPage.posts.push(newPost);
            this._state.userPage.newPostText = '';
            this._callSubscriber(this._state);
         } else if (action.type === NEW_POST_TEXT) {
            this._state.userPage.newPostText = action.post;
            console.log(this._state.userPage.newPostText);
            this._callSubscriber(this._state);
        } else if (action.type === NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.messageText;
            console.log(this._state.dialogsPage.newMessage);
            this._callSubscriber(this._state);
         } else if (action.type === ADD_MESSAGE) {
            let newTextMessage: MessageItemType = {
                id: v1(),
                message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.messages.push(newTextMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state);
    }
}
};
export const addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST});
export const newPostActionCreator = (text:string): NewPostActionType => ({ type: NEW_POST_TEXT, post:text});
export const addMessageActionCreator = (): AddMessageActionType => ({ type: ADD_MESSAGE});
export const newMessageActionCreator = (message:string): NewMessageActionType => ({ type: NEW_MESSAGE, messageText:message});





