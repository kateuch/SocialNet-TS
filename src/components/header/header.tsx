
import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header: React.FC<any> = (props) => {
    return (
        <header className={style.header}>
        <img className={style.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6BRp1P7M364mlqSmn4mwrYi1oetTrgZnRdXl64pvyOfwgjh7o&usqp=CAU" />
      <div className='login'>
        <NavLink to={'/login'}>{props.isAuth ? props.login : 'Login'}</NavLink>
        </div>
      </header>
    )
}
export default Header;