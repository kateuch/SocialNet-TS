
import React from 'react';
import Profile from './profile_page';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux_store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getUserProfile, ProfileType } from '../../redux/profile_reducer';
import Login from '../login/login';


class ProfileContainer extends React.Component<RootPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "1049"
        }
        this.props.getUserProfile(userId);
    }

    render() {

        if (!this.props.isAuth) return <Login/>

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withURLContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(withURLContainer);


//types
type PathParamsType = {
    userId: string
};
type MapStatePropsType = {
    profile: ProfileType | null,
    isAuth: boolean
};
type MapDispatchPropsType = {
    getUserProfile: (profile: string) => void
};
type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

type RootPropsType = RouteComponentProps<PathParamsType> & OwnPropsType;