//@ts-nocheck

import React from 'react';
import { ActionsTypes} from '../../redux/store';
import { addMessageActionCreator, newMessageActionCreator } from '../../redux/dialog_reducer';
import Dialogs from './dialogs';
import { RootStateType } from '../../redux/redux_store';
import { connect } from 'react-redux';

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

// function DialogsContainer(props: PropsType) {
//     let state = props.store.getState().dialogsPage

//     function onAddMessage() {
//         store.dispatch(addMessageActionCreator())
//     };

//     function onMessageType (message) {
//         if (message) { 
//             store.dispatch(newMessageActionCreator(message));
//         }

//     return (
//         <Dialogs changeMessageText={onMessageType} addMessage={onAddMessage} dialogsPage={state}/>
//     )
// }};

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator()); 
        },
        changeMessageText: (message) => {
               dispatch(newMessageActionCreator(message));
             }
            }
        }

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;