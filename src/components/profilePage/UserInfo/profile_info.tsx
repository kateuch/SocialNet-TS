import React from 'react';
import style from './profile_info.module.css';


const UserInfo = () => {
    return (
        <div className={style.personal_info}>
            <section>
                <img className={style.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6BRp1P7M364mlqSmn4mwrYi1oetTrgZnRdXl64pvyOfwgjh7o&usqp=CAU" /></section>
                <section>User information</section>
                 
        </div>
    )
};


export default UserInfo;
