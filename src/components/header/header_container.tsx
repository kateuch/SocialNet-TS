
import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import {setUser}  from './../../redux/auth_reducer';
import { RootStateType } from '../../redux/redux_store';
import { getAuthMe } from '../api/api';



class HeaderContainer extends React.Component<RootPropsType> {

    componentDidMount () {
    		getAuthMe().then(data => {
                let {id, login, email} = data
            			this.props.setUser(id, login, email);
            })}

    render () {
        return (
            <>
        <Header {...this.props}/>

        </>
        )
    }
};

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {setUser} )(HeaderContainer);

//types

type MapStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUser: (id: number, login: string, email: string ) => void
};

type RootPropsType = MapStateType & MapDispatchPropsType
