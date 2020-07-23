import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './dialogs.module.css';
import { v1 } from 'uuid';
import DialogItem from './dialogsItem/dialogsItem';
import MessageItem from './messageItem/messageItem';
import {DialogsPageType} from '../../redux/state';


type PropsType = {
    dialogsPage: DialogsPageType
    addMessage: (message: string) => void
}

const newMessageElement = React.createRef<HTMLTextAreaElement>();


export default function Dialogs(props:PropsType) {

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} /> );
 
    let messagesElement = props.dialogsPage.messages.map(message => <MessageItem id={message.id} message={message.message} /> );

    function onAddMessage () {
        let message = newMessageElement.current?.value
        if (message) {
            props.addMessage(message)
            newMessageElement.current!.value = props.dialogsPage.newMessage
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                { messagesElement }
              </div>
              <textarea placeholder="What's up" ref={newMessageElement}></textarea>
                <button onClick={onAddMessage}>Send</button>

        </div>

    )
}

