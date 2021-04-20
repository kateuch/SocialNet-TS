
import React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import { setCurrentPage, follow, unfollow, setTotalCount, toggleInProgress, setUsers, UserType, toggleButtonDisabling } from './../../redux/users_reducer';
import Preloader from '../utils/preloader'
import { RootStateType } from '../../redux/redux_store';
import { getUsers } from '../api/api';


class UserContainer extends React.Component<UsersPropsType> {

	componentDidMount() {
		this.props.toggleInProgress(true);

		getUsers(this.props.currentPage , this.props.pageSize ).then(data => {
			this.props.toggleInProgress(false);

			this.props.setUsers(data.items);
			this.props.setTotalCount(data.totalCount)
		}
		)
	}

	onPageChanged = (p: number) => {
		this.props.setCurrentPage(p);
		this.props.toggleInProgress(true);
		getUsers(p, this.props.pageSize)
			.then(data => {
				this.props.toggleInProgress(false);
				this.props.setUsers(data.items);
			})
	}

	// toggleButtonDisabling = (status:boolean) => {
	// 	this.props.toggleButtonDisabling(status);
	// }

	render() {

		return (
			<>
				{this.props.inProgress ? <Preloader />
				: <Users currentPage={this.props.currentPage}
					totalCount={this.props.totalCount}
					users={this.props.users}
					pageSize={this.props.pageSize}
					onPageChanged={this.onPageChanged}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					inProgress={this.props.inProgress}
					buttonDisabling={this.props.buttonDisabling}
					toggleButtonDisabling={this.props.toggleButtonDisabling}
					/>
				}
			</>
		)
	}

}

let mapStateToProps = (state: RootStateType): MapStatePropsType  => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage,
		inProgress: state.usersPage.inProgress,
		buttonDisabling: state.usersPage.buttonDisabling
	}
};


const UsersContainer = connect(mapStateToProps,
	{setUsers, follow, unfollow, setCurrentPage, setTotalCount, toggleInProgress, toggleButtonDisabling} )(UserContainer);

export default UsersContainer;

//types

type MapStatePropsType = {
	users: Array<UserType>,
	pageSize: number,
	totalCount: number,
	currentPage: number,
	inProgress: boolean,
	buttonDisabling: Array<string>
}

type MapDispatchPropsType = {
	follow: (userId: string) => void,
    unfollow: (userId: string) => void,
	setUsers: (users: Array<UserType>) => void,
	setCurrentPage: (page: number) => void,
	setTotalCount: (count: number) => void,
	toggleInProgress: (status: boolean) => void,
	toggleButtonDisabling: (status: boolean, userId: string) => void,
};
type UsersPropsType = MapStatePropsType & MapDispatchPropsType;


// type RootPropsType = RouteComponentProps & UsersPropsType;