
import React from 'react';
import image from '../../pics/image.jpg';
import Preloader from '../../utils/preloader';
import style from './profile_info.module.css';
import { ProfileType } from '../../../redux/profile_reducer';

const UserInfo = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={style.personal_info}>
            <section>
                <img className={style.avatar} src={props.profile.photos ? props.profile.photos.large : image} /></section>
            <section>
                <div>{props.profile.fullName || "No name"}</div>
                <div>{props.profile.aboutMe || "No status"}</div>
            </section>
        </div>
    )
};


export default UserInfo;

//types
type PropsType = {
    profile: ProfileType | null
}
