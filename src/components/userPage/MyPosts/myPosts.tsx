import React, { ChangeEvent } from 'react';
import style from './myPosts.module.css';
import Posts from './post/posts';
import { UserPageType, ActionType } from '../../../redux/store';
import { addPostActionCreator, newPostActionCreator } from '../../../redux/profile_reducer';



type PropsType = {
    posts: UserPageType
    dispatch: (action: ActionType) => void
}
const newPostElement = React.createRef<HTMLTextAreaElement>();

export default function MyPosts(props: PropsType) {

    function onAddPost() {
        props.dispatch(addPostActionCreator())
    };

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        let text = e.currentTarget?.value;
        if (text) {
            props.dispatch(newPostActionCreator(text));
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
