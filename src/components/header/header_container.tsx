
import axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import {setUser}  from './../../redux/auth_reducer';
import { RootStateType } from '../../redux/redux_store';



class HeaderContainer extends React.Component<RootPropsType> {

    componentDidMount () {
    		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {

            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
            			this.props.setUser(id, login, email);
            }
		})
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


export default connect(mapStateToProps, {setUser} )(HeaderContainer);

//types
// type PropsType = {

// }

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
