
import axios from 'axios';
import React from 'react';
import Profile from './profile_page';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux_store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ProfileType, setProfile } from '../../redux/profile_reducer';


class ProfileContainer extends React.Component<RootPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "1049"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let withURLContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(withURLContainer);


//types
type PathParamsType = {
    userId: string
};
type MapStatePropsType = {
    profile: ProfileType | null
};
type MapDispatchPropsType = {
    setProfile: (profile: ProfileType) => void
};
type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

type RootPropsType = RouteComponentProps<PathParamsType> & OwnPropsType;