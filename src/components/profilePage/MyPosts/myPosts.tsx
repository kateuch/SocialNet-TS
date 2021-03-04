//@ts-nocheck
import React, { ChangeEvent } from 'react';
import style from './myPosts.module.css';
import Posts from './post/posts';
import { profilePageType, ActionsTypes, PostType } from '../../../redux/store';

type PropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
}
const newPostElement = React.createRef<HTMLTextAreaElement>();

export default function MyPosts(props) {

    function onAddPost() {
        props.addPost();
    }

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        let text = e.currentTarget?.value;
        if (text) {
            props.changeNewPostText(text);
        }
    };

    let postsElement = props.profilePage.posts.map(post =>
        <Posts id={post.id} message={post.message} likeCount={post.likeCount} />)
  
        return (
        <div>
            <div>
                <textarea placeholder="What's up" ref={newPostElement} value={props.profilePage.newPostText} onChange={onPostChange} ></textarea>
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className={style.mypost}>My posts</div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}
