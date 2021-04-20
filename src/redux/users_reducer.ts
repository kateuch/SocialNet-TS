
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CUR_PAGE = 'SET-CUR-PAGE';
const SET_INPROGRESS = 'SET-INPROGRESS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_BTN_DISABLING = 'SET-BTN_DISABLING';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 7,
    totalCount: 20,
    currentPage: 1,
    inProgress: false,
    buttonDisabling: [] as Array<string>
};

const users_reduser = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType  => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        };
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
            case SET_CUR_PAGE:
                return {
                    ...state,
                    currentPage: action.pageNumber
                };
                case SET_INPROGRESS:
                    return {
                        ...state,
                        inProgress: action.inProgress
                    };
                    case SET_BTN_DISABLING:
                    return {
                        ...state,
                        buttonDisabling: action.status
                        ? [...state.buttonDisabling, action.userId ]
                        : state.buttonDisabling.filter(id => id !== action.userId)
                    };

        default:
            return state;
    }
}

export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users } as const );
export const follow = (userID: string) => ({ type: FOLLOW, userID }  as const);
export const unfollow = (userID: string) => ({ type: UNFOLLOW, userID }  as const);
export const setTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount }  as const);
export const setCurrentPage = (pageNumber: number) => ({type: SET_CUR_PAGE, pageNumber }  as const);
export const toggleInProgress = (inProgress: boolean) => ({type: SET_INPROGRESS, inProgress }  as const);
export const toggleButtonDisabling = (status: boolean, userId: string) => ({type: SET_BTN_DISABLING, status, userId }  as const);

export default users_reduser;


//types
export type UserType = {
name: string,
id: string,
photoUrl: string,
followed: boolean,
fullName: string,
status: string,
photos: { small: string | null,  large: string | null }
};

export type UsersType = {
users: Array<UserType>
};

export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    inProgress: boolean,
    buttonDisabling: Array<string>

};
type setUsers = {
    type: typeof SET_USERS,
    users: Array<UserType>
};
type follow = {
    type: typeof FOLLOW,
    userID: string
};
type unfollow = {
    type: typeof UNFOLLOW,
    userID: string
};
type setTotalCount = {
    type: typeof SET_TOTAL_COUNT,
    totalCount: number
};
type setCurrentPage = {
    type: typeof SET_CUR_PAGE,
    pageNumber: number
};
type toggleInProgress = {
    type: typeof SET_INPROGRESS,
    inProgress: boolean
};
type toggleButtonDisabling = {
    type: typeof SET_BTN_DISABLING,
    status: boolean,
    userId: string
};

export type setUsersAC = typeof setUsers
export type followAC = typeof follow
export type unfollowAC = typeof unfollow
export type setTotalCountAC = typeof setTotalCount
export type setCurrentPageAC = typeof setCurrentPage
export type toggleInProgressAC = typeof toggleInProgress
export type buttonDisablingAC = typeof toggleButtonDisabling

export type ActionsTypes = setUsers | follow | unfollow |
                            setTotalCount | setCurrentPage | toggleInProgress | toggleButtonDisabling;