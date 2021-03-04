import React from 'react';
import style from './profile_page.module.css';
import MyPosts from './MyPosts/myPosts';
import UserInfo from './UserInfo/profile_info';
import { profilePageType, ActionsTypes } from '../../redux/store';
import { RootStateType } from '../../redux/redux_store';
import MyPostsContainer from './MyPosts/myPosts_container';

type PropsType = {
    store: any
}

const Profile = (props: PropsType) => {

    return (
        <div className={style.profile_page}>
            <section>
                <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </section>
            <UserInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}
export default Profile;