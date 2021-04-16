import { addPost, newPost } from '../../../redux/profile_reducer';
import MyPosts from './myPosts';
import { RootStateType } from '../../../redux/redux_store';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        changeNewPostText: (text: string) => {
            dispatch(newPost(text))
        }
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;