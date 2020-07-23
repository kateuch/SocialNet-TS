import React from 'react';
import style from './posts.module.css';

type PropsType = {
    id: string
    message: string
    likeCount: string

}

const Posts = (props:PropsType) => {
    return (
        <div className={style.posts}>
            <div className={style.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgAcvAyClxARd9xBZ2L4hh1HOcBHvGB-l9t1BbLqlKyEQKKDI-&usqp=CAU' />
                  {props.message}
                  <button className={style.like_button}>👍 like</button>
                     <span>{props.likeCount}</span>
                  </div>
        </div>
    )
}
export default Posts; 