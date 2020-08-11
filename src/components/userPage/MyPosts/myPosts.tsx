// @ts-nocheck
import React, { ChangeEvent } from 'react';
import style from './myPosts.module.css';
import Posts from './post/posts';
import { UserPageType } from '../../../redux/state';


type PropsType = {
    posts: UserPageType
    addPost: () => void
    changePostText: (text: string) => void
}
const newPostElement = React.createRef<HTMLTextAreaElement>();

export default function MyPosts(props: PropsType) {

    function onAddPost() {
        props.dispatch({ type: "ADD-POST" })
    };

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        let text = newPostElement.current?.value;
        if (text) {
            props.dispatch({ type: "UPDATE-NEW-POST-TEXT", e: text });
        }
    };

    let postsElement = props.posts.posts.map(post =>
        <Posts id={post.id} message={post.message} likeCount={post.likeCount} />)
    return (
        <div>
            <div>
                <textarea placeholder="What's up" ref={newPostElement} value={props.posts.newPostText} onChange={onPostChange} ></textarea>
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className={style.mypost}>My posts</div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}
