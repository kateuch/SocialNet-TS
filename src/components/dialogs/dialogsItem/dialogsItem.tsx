import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './dialogsItem.module.css';
import  {DialogItemType}   from '../../../redux/state'


const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;

