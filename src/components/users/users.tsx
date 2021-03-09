//@ts-nocheck
import axios from 'axios';
import React from 'react';
import userPhoto from './../pics/small.jpg';
import style from './users.module.css';

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalCount / props.pageSize);

	let page = [];
	for (let i = 1; i <= pagesCount; i++) {
		page.push(i)
	}

	return (
		<>
		   <div className={style.pages}>
				{page.map((p) => {
					return <nav className={props.currentPage === p && style.selected}
						onClick={() => props.onPageChanged(p)}>{p}</nav>
				})}
			</div>
			<div>
				{
					props.users.map(u => <div key={u.id}>
						<div>
							<img src={u.photos.small ? u.photos.small : userPhoto} />
						</div>
						<div>
							<div>{u.name}</div><p />
							<div>{u.status ? u.status : "hi, everyone!"}</div>
							<div>{"u.localcity"}</div>
							<div>{"u.localcountry"}</div>
						</div>
						<div>{u.follow
							? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
							: <button onClick={() => { props.follow(u.id) }}>Follow</button>
						}
						</div>
					</div>
					)}
			</div>

		</>
		)
}

export default Users;