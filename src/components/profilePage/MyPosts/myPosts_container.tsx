//@ts-nocheck

import React from 'react';
import { ActionsTypes } from '../../../redux/store';
import { addPostActionCreator, newPostActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './myPosts';
import { RootStateType } from '../../../redux/redux_store';
import { connect} from 'react-redux'

// type PropsType = {
//     store:RootStateType
//     //dispatch: (action: ActionsTypes) => void
// }

//function MyPostsContainer (props: PropsType) {

//     let state = props.store.getState().profilePage
    
//     function onAddPost() {
//         props.store.dispatch(addPostActionCreator())
//     };

//     function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
//         let text = e.currentTarget?.value;
//         if (text) {
//             props.store.dispatch(newPostActionCreator(text));
//         }
//     };
//     return (
//         <MyPosts changeNewPostText={onPostChange} 
//                 addPost={onAddPost}
//                 posts={state.profilePage.posts}
//                 newPostText={state.profilePage.newPostText}/>
//     )
// }

let mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }   
};

let mapDispatchToProps = (dispatch: ActionsTypes) => {
    return {
        addPost: () => { 
            dispatch(addPostActionCreator()) 
        },    
        changeNewPostText: (text: string) => {
            dispatch( newPostActionCreator(text) )
         }
            };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;