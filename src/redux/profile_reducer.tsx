import { PostType, ActionType, UserPageType } from "./store";
import { v1 } from "uuid";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

const profile_reducer = (state: UserPageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likeCount: "0"
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case NEW_POST_TEXT:
            state.newPostText = action.post;
            console.log(state.newPostText)
            return state;
        default:
            return state;
    }
}

export type AddPostActionType = {
    type: typeof ADD_POST
};
export type NewPostActionType = {
    type: typeof NEW_POST_TEXT
    post: string
};

export const addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST});
export const newPostActionCreator = (text:string): NewPostActionType => ({ type: NEW_POST_TEXT, post:text});

export default profile_reducer;