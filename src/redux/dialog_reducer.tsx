import { MessageItemType, DialogsPageType, ActionType } from "./store";
import { v1 } from "uuid";

const NEW_MESSAGE = 'NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const dialogs_reducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case NEW_MESSAGE:
            state.newMessage = action.messageText;
            console.log(state.newMessage);
            return state;

        case ADD_MESSAGE:
            let newTextMessage: MessageItemType = {
                id: v1(),
                message: state.newMessage
            }
            state.messages.push(newTextMessage);
            state.newMessage = '';
            return state;
        default:
            return state;
    }
}

export type NewMessageActionType = {
    type: typeof NEW_MESSAGE
    messageText: string
};
export type AddMessageActionType = {
    type: typeof ADD_MESSAGE
};

export const addMessageActionCreator = (): AddMessageActionType => ({ type: ADD_MESSAGE});
export const newMessageActionCreator = (message:string): NewMessageActionType => ({ type: NEW_MESSAGE, messageText:message});

export default dialogs_reducer;