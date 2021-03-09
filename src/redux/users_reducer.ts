
//@ts-nocheck
import React from 'react';
import { v1 } from "uuid";

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_CUR_PAGE = 'SET-CUR-PAGE';

let initialState = {
    users: [],
    pageSize: 7,
    totalCount: 20,
    currentPage: 1
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

        default:
            return state;
    }
}

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const totalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount });
export const currentPageAC = (pageNumber) => ({type: SET_CUR_PAGE, pageNumber });

export default users_reduser;

