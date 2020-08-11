// @ts-nocheck
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
export type StoreType = {
    _state: StateType,
    addPost: () => void
    addMessage: (message: string) => void
    changePostText: (text: string) => void
    subscribe: (observer: any) => void
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

    addMessage(message: string) {
        let newMessage: MessageItemType = {
            id: v1(),
            message: message
        }
        this._callSubscriber(this._state);
        this._state.dialogsPage.messages.push(newMessage);
    },

    dispatch (action) {
         if (action.type ==="ADD-POST") {
            let newPost: PostType = {
                id: v1(),
                message: this._state.userPage.newPostText,
                likeCount: "0"
            };
            this._state.userPage.posts.push(newPost);
            this._state.userPage.newPostText = '';
            this._callSubscriber(this._state);
         } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.userPage.newPostText = action.e;
            console.log(this._state.userPage.newPostText)
            this._callSubscriber(this._state);
         }
    }
};



