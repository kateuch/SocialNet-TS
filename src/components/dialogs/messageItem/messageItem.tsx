import React from 'react';
import { MessageItemType } from '../../../redux/dialog_reducer';
import style from './messageItem.module.css';


const MessageItem = (props: MessageItemType) => {
    return (<div className={style.message}>{props.message}</div>)
};

export default MessageItem;

