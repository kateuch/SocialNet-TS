const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CUR_PAGE = 'SET-CUR-PAGE';
const SET_INPROGRESS = 'SET-INPROGRESS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 7,
    totalCount: 20,
    currentPage: 1,
    inProgress: false
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
                        return { ...u, follow: true }
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
                        return { ...u, follow: false }
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

export default users_reduser;


//types
export type UserType = {
name: string,
id: string,
photoUrl: string,
followed: boolean,
fullName: string,
status: string,
}

export type UsersType = {
users: Array<UserType>
};

export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    inProgress: boolean
};
type setUsers = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
type follow = {
    type: typeof FOLLOW,
    userID: string
}
type unfollow = {
    type: typeof UNFOLLOW,
    userID: string
}
type setTotalCount = {
    type: typeof SET_TOTAL_COUNT,
    totalCount: number
}
type setCurrentPage = {
    type: typeof SET_CUR_PAGE,
    pageNumber: number
}
type toggleInProgress = {
    type: typeof SET_INPROGRESS,
    inProgress: boolean
}

export type setUsersAC = typeof setUsers
export type followAC = typeof follow
export type unfollowAC = typeof unfollow
export type setTotalCountAC = typeof setTotalCount
export type setCurrentPageAC = typeof setCurrentPage
export type toggleInProgressAC = typeof toggleInProgress


export type ActionsTypes = setUsers | follow | unfollow |
                            setTotalCount | setCurrentPage | toggleInProgress