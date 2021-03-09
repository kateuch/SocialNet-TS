//@ts-nocheck
import React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import { currentPageAC, followAC, totalCountAC } from './../../redux/users_reducer';
import { unfollowAC } from './../../redux/users_reducer';
import { setUsersAC } from './../../redux/users_reducer';
import axios from 'axios';


class UserContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalCount(response.data.totalCount)
		}
		)
	}

	onPageChanged = (p) => {
		this.props.setCurrentPage(p);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			})
	}

	render() {
		return <Users
		currentPage={this.props.currentPage}
		totalCount={this.props.totalCount}
		users={this.props.users}
		pageSize={this.props.pageSize}
		onPageChanged={this.onPageChanged}
		unfollow={this.props.unfollow}
		follow={this.props.follow} />
	}

}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage
	}
};

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
		setCurrentPage: (pageNumber) => {
			dispatch(currentPageAC(pageNumber))
		},
		setTotalCount: (count) => {
			dispatch(totalCountAC(count))
		},
	}
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default UsersContainer;