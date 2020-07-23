import React from 'react';
import { NavLink } from "react-router-dom";
import style from './menu.module.css';

const Menu: React.FC<any> = () => {
  return (
    <nav className={style.left_menu}>
      <div className={style.item}>
        <NavLink to='/user_page' activeClassName={style.active}>Profile</NavLink>
            </div>
      <div className={style.item}>
        <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/friends' activeClassName={style.active}>Friends</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/news'activeClassName={style.active}>News</NavLink>
      </div>
    </nav>
  )
}
export default Menu;