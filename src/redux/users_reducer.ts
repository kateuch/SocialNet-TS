
//@ts-nocheck

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_CUR_PAGE = 'SET-CUR-PAGE';
const SET_INPROGRESS = 'SET-INPROGRESS';

let initialState = {
    users: [],
    pageSize: 7,
    totalCount: 20,
    currentPage: 1,
    inProgress: false
};

const users_reduser = (state = initialState, action) => {

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

export const setUsers = (users) => ({ type: SET_USERS, users });
export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount });
export const setCurrentPage = (pageNumber) => ({type: SET_CUR_PAGE, pageNumber });
export const toggleInProgress = (inProgress) => ({type: SET_INPROGRESS, inProgress });

export default users_reduser;

