
import React from 'react';
import { ActionType, StoreType } from '../../redux/store';
import style from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem';
import MessageItem from './messageItem/messageItem';
import { addMessageActionCreator, newMessageActionCreator } from '../../redux/dialog_reducer';

type PropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

const newMessageElement = React.createRef<HTMLTextAreaElement>();


export default function Dialogs(props: PropsType) {
     let state = props.store.getState().dialogsPage

    let dialogsElement = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} /> );
 
    let messagesElement = state.messages.map(message => <MessageItem id={message.id} message={message.message} /> );

    function onAddMessage() { props.dispatch(addMessageActionCreator())};

    function onMessageType (e: React.ChangeEvent<HTMLTextAreaElement>) {
        let message = e.currentTarget?.value;
        if (message) {
            let action = newMessageActionCreator(message)
            props.store.dispatch(action);
            // e.currentTarget!.value = props.dialogsPage.newMessage
        }
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                { messagesElement }
              </div>
              <textarea placeholder="What's up" 
                        value={state.newMessage} 
                        onChange={onMessageType}></textarea>
                <button onClick={onAddMessage}>Send</button>

        </div>

    )
}

