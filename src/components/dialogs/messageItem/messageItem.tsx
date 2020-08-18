import React from 'react';
import style from './messageItem.module.css';
import  {MessageItemType}   from '../../../redux/store'

const MessageItem = (props: MessageItemType) => {
    return (<div className={style.message}>{props.message}</div>)
};

export default MessageItem;

