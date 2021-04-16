
const SET_USER_DATA = 'SET-USER-DATA';

let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


const auth_reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setUser = (id: number, login: string, email: string): AuthorizeActoionType => ({ type: SET_USER_DATA, data: { id, login, email } });

export default auth_reducer;


//types

type AuthType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

export type DataType = {
    id: number,
    login: string,
    email: string
}

type AuthorizeActoionType = {
    type: typeof SET_USER_DATA,
    data: DataType
}

type ActionType = AuthorizeActoionType