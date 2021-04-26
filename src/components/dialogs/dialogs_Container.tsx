
import Dialogs from './dialogs';
import { RootStateType } from '../../redux/redux_store';
import { connect } from 'react-redux';
import { addMessage, newMessage  } from '../../redux/dialog_reducer';


const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
}


const DialogsContainer = connect(mapStateToProps,{addMessage, newMessage})(Dialogs);

export default DialogsContainer;