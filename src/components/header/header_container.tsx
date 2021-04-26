
import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import {authMe}  from './../../redux/auth_reducer';
import { RootStateType } from '../../redux/redux_store';


class HeaderContainer extends React.Component<RootPropsType> {

    componentDidMount () {
            this.props.authMe()
        }

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


export default connect(mapStateToProps, {authMe} )(HeaderContainer);

//types

type MapStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type MapDispatchPropsType = {
    authMe: any
};

type RootPropsType = MapStateType & MapDispatchPropsType
