import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogItemType } from '../../../redux/dialog_reducer';
import style from './dialogsItem.module.css';



const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;

