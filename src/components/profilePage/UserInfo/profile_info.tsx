//@ts-nocheck
import React from 'react';
import Preloader from '../../utils/preloader';
import style from './profile_info.module.css';
import image from '../../pics/image.jpg'


const UserInfo = (props) => {

    if (!props.profile ) {
    return <Preloader />
    }
    return (
        <div className={style.personal_info}>
            <section>
                <img className={style.avatar} src={props.profile.photos.large || image }/></section>
                <section>
                    <div>{props.profile.name || "No name"}</div>
                    <div>{props.profile.aboutMe || "No status"}</div>
                    </section>

        </div>
    )
};


export default UserInfo;
