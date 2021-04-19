
import React from 'react';
import userPhoto from './../pics/small.jpg';
import style from './users.module.css';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/users_reducer';
import axios from 'axios';
import { followUser, unfollowUser } from '../api/api';

let Users = (props: PropsType) => {

	let pagesCount = Math.ceil(props.totalCount / props.pageSize);

	let page = [];
	for (let i = 1; i <= pagesCount; i++) {
		page.push(i)
	}

	return (
		<>
			<div className={style.pages}>
				{page.map((p) => {
					return <nav className={props.currentPage === p ? style.selected : ''}
						onClick={() => props.onPageChanged(p)}>{p}</nav>
				})}
			</div>
			<div>
				{
					props.users.map(u => <div key={u.id}>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} />
						</NavLink>
						<div>
							<div>{u.name}</div><p />
							<div>{u.status ? u.status : "hi, everyone!"}</div>
							<div>{"u.localcity"}</div>
							<div>{"u.localcountry"}</div>
						</div>
						<div>{u.followed
							? <button onClick={() => {
								unfollowUser(u.id).then(() =>
									props.unfollow(u.id))
							}}>Unfollow</button>

							: <button onClick={() => {
								followUser(u.id).then(() =>
									props.follow(u.id))
							}}>Follow</button>
						}
						</div>
					</div>
					)}
			</div>

		</>
	)
}

export default Users;

//types

type PropsType = {
	users: Array<UserType>,
	pageSize: number,
	totalCount: number,
	currentPage: number,
	inProgress: boolean,
	onPageChanged: (p: number) => void,
	follow: (userId: string) => void,
	unfollow: (userId: string) => void,
}