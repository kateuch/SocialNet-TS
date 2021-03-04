//@ts-nocheck
import axios from 'axios';
import React from 'react';
import userPhoto from './../pics/small.jpg';

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => { this.props.setUsers(response.data.items) }
		)
	}

	render() {
		return <div>
			{
				this.props.users.map(u => <div key={u.id}>
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
						? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
						: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
					}
					</div>
				</div>
				)}
		</div>
	}
}
export default Users;