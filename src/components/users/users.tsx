
import React from 'react';
import userPhoto from './../pics/small.jpg';
import style from './users.module.css';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/users_reducer';
import axios from 'axios';

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
								axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
							headers: {
								'API-KEY': '521c56f3-3091-4723-871a-57ee7f57ec6d'
							}})
			.then(response => {
				if(response.data.resultCode===0) {
							props.unfollow(u.id) }}
							)
						}}>Unfollow</button>
							: <button onClick={() => {
								axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
								headers: {
									'API-KEY': '521c56f3-3091-4723-871a-57ee7f57ec6d'
								}})
								.then(response => {
									if(response.data.resultCode===0) {
									props.follow(u.id) }
								})
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