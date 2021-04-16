
import React, { ChangeEvent } from 'react';
import { PostType, ActionsTypes } from '../../../redux/profile_reducer';
import style from './myPosts.module.css';
import Posts from './post/posts';


type PropsType = {
    posts: Array<PostType>,
    newPostText? : string,
    addPost: () => void,
    changeNewPostText: (text:string) => void
}
const newPostElement = React.createRef<HTMLTextAreaElement>();

export default function MyPosts(props: PropsType ) {

    function onAddPost() {
        props.addPost();
    }

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        let text = e.currentTarget?.value;
        if (text) {
            props.changeNewPostText(text);
        }
    };

    let postsElement = props.posts.map(post =>
        <Posts id={post.id}
            message={post.message}
            likeCount={post.likeCount} />)

        return (
        <div>
            <div>
                <textarea placeholder="What's up" ref={newPostElement} value={props.newPostText} onChange={onPostChange} ></textarea>
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className={style.mypost}>My posts</div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}
