
import { v1 } from "uuid";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const SET_USERPROFILE = 'SET-USERPROFILE';

let initialState: profilePageType = {
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
                posts: [...state.posts, newPost],
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
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPost = (): AddPostActionType => ({ type: ADD_POST });
export const newPost = (text: string): NewPostActionType => ({ type: NEW_POST_TEXT, post: text } as const);
export const setProfile = (profile: ProfileType): setProfileActionType => ({ type: SET_USERPROFILE, profile });

export default profile_reducer;


//types
export type PostType = {
    id: string
    message: string
    likeCount: string
};
export type profilePageType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType | null
};

export type ProfileType = {
    aboutMe: string,
    contacts?: null | string,
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: null |  { small: string,  large: string   }
}

export type ActionsTypes = AddPostActionType | NewPostActionType | setProfileActionType;

export type AddPostActionType = {
    type: typeof ADD_POST
};
export type NewPostActionType = {
    type: typeof NEW_POST_TEXT,
    post: string
};
export type setProfileActionType = {
    type: typeof SET_USERPROFILE,
    profile: ProfileType
};

export type addPostActionCreatorType = typeof addPost;
export type newPostActionCreatorType = typeof newPost;
export type setProfileActionCreatorType = typeof setProfile;