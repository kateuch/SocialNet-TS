import { v1 } from 'uuid';
import {rerenderEntireTree} from './render'

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

export type DialogsPageType ={
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessage: string
};

export type StateType = {
    userPage: UserPageType
    dialogsPage: DialogsPageType
};

export function addPost (message: string) {
    let newPost: PostType = {
        id: v1(),
        message: message,
        likeCount: "0"
    }
    rerenderEntireTree (state);
    state.userPage.posts.push(newPost);
}

export function addMessage (message: string) {
    let newMessage: MessageItemType = {
        id: v1(),
        message: message,
        }
    rerenderEntireTree (state);
    state.dialogsPage.messages.push(newMessage);
}


const state:StateType = {
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
};
export default state;
       