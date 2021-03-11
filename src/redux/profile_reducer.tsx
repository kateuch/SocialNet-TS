//@ts-nocheck
import { profilePageType, ActionsTypes } from "./store";
import { v1 } from "uuid";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const SET_USERPROFILE = 'SET-USERPROFILE';

let initialState = {
    posts: [
        { id: v1(), message: 'Salute! 🖖', likeCount: '17' },
        { id: v1(), message: 'Bye-bye 🎃', likeCount: '20' }
    ],
    newPostText: "",
    profile: null
}

const profile_reducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likeCount: "0"
            };
            return {
            ...state,
            posts:[...state.posts, newPost],
            newPostText: ""
        }
        case NEW_POST_TEXT:
        return {
            ...state,
            newPostText: action.post
        }
        case SET_USERPROFILE:
        return {
            ...state,
            profile: action.userProfile
        }
        default:
            return state;
    }
}

export type AddPostActionType = {
    type: string
};
export type NewPostActionType = {
    type: string
    post: string
};

export type addPostActionCreatorType = typeof addPostActionCreator;
export type newPostActionCreatorType = typeof newPostActionCreator;
export type setProfileType = typeof setProfile;

export const addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST});
export const newPostActionCreator = (text:string): NewPostActionType => ({ type: NEW_POST_TEXT, post:text});
export const setProfile = (userProfile): setProfileType => ({ type: SET_USERPROFILE, userProfile});

export default profile_reducer;