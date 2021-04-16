
import React from 'react';
import { DialogsPageType } from '../../redux/dialog_reducer';

import style from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem';
import MessageItem from './messageItem/messageItem';

type PropsType = {
    dialogsPage: DialogsPageType,
    addMessage: () => void,
    newMessage: (text: string) => void
}

export default function Dialogs(props: PropsType) {

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} /> );

    let messagesElement = props.dialogsPage.messages.map(message => <MessageItem id={message.id} message={message.message} /> );

    function onAddMessage() {
        props.addMessage()
    };

   const onMessageType = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(e) {
        let message = e.currentTarget?.value;
        props.newMessage(message);
        //e.currentTarget!.value = props.dialogsPage.newMessage
    }}

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                { messagesElement }
              </div>
              <textarea placeholder="What's up" value={props.dialogsPage.newMessage} onChange={onMessageType}></textarea>
                <button onClick={onAddMessage}>Send</button>

        </div>

    )
}
