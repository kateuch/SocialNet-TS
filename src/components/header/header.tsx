import React from 'react';
import style from './header.module.css';

const Header: React.FC<any> = () => {
    return (
        <header className={style.header}>
        <img className={style.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6BRp1P7M364mlqSmn4mwrYi1oetTrgZnRdXl64pvyOfwgjh7o&usqp=CAU" />
      </header>
    )
}
export default Header;