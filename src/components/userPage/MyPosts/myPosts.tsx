import React from 'react';
import style from './myPosts.module.css';
import Posts from './post/posts';
import { v1 } from 'uuid';
import { UserPageType } from '../../../redux/state';


type PropsType = {
    posts: UserPageType
    addPost: (text: string) => void
}


type HandleOnClick = (value: string) => void

const newPostElement = React.createRef<HTMLTextAreaElement>();



export default function MyPosts(props: PropsType) {

    function onAddPost () {
        let text = newPostElement.current?.value;
        if (text) { 
            props.addPost(text)
            newPostElement.current!.value= props.posts.newPostText};
       
        };

    let postsElement = props.posts.posts.map(post => <Posts id={post.id} message={post.message} likeCount={post.likeCount} />)
    return (
        <div>
            <div>
                <textarea placeholder="What's up" ref={newPostElement}></textarea>
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className={style.mypost}>My posts</div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}
