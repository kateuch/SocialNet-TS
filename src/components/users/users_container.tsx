//@ts-nocheck
import { connect } from 'react-redux';
import Users from './users';
import {followAC} from './../../redux/users_reducer';
import {unfollowAC} from './../../redux/users_reducer';
import {setUsersAC} from './../../redux/users_reducer';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
		}};

let mapDispatchToProps = (dispatch) => {
	return {

		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		follow: (userID) => {
			dispatch(followAC(userID));
		},
		unfollow: (userID) => {
			dispatch(unfollowAC(userID));
		},
	}};	
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;