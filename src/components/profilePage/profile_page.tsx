
import React from 'react';
import style from './profile_page.module.css';
import UserInfo from './UserInfo/profile_info';
import MyPostsContainer from './MyPosts/myPosts_container';
import { ProfileType } from '../../redux/profile_reducer';


const Profile = (props: PropsType) => {

    return (
        <div className={style.profile_page}>
            <section>
                <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </section>
            <UserInfo profile={props.profile} />
            <MyPostsContainer  />
        </div>
    )
}
export default Profile;

//types

type PropsType = {
    profile: ProfileType | null
}