
import { v1 } from "uuid";

const NEW_MESSAGE = 'NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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


export const dialogs_reducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {


    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.messageText
            }
        case ADD_MESSAGE:
            let newTextMessage: MessageItemType = {
                id: v1(),
                message: state.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, newTextMessage],
                newMessage: ''
            };
        default:
            return state;
    }
}

//types
export type ActionsTypes = NewMessageActionType | AddMessageActionType

export type NewMessageActionType = {
    type: typeof NEW_MESSAGE
    messageText: string
};
export type AddMessageActionType = {
    type: typeof ADD_MESSAGE
};

export type addMessageActionCreatorType = typeof addMessage;
export type newMessageActionCreatorType = typeof newMessage;

export const addMessage = () => ({ type: ADD_MESSAGE });
export const newMessage = (message: string) => ({ type: NEW_MESSAGE, text: message });

export default dialogs_reducer;

//types
export type DialogItemType = {
    id: string
    name: string
};
export type MessageItemType = {
    id: string
    message: string
};
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessage: string
};