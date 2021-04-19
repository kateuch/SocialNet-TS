import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '521c56f3-3091-4723-871a-57ee7f57ec6d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsers = (currentPage = 1, pageSize = 10) => instance.get(`users?page=${currentPage}&count=${pageSize}`, {
})
    .then(response => {
        return response.data
    }
    );

export const getAuthMe = () => instance.get(`auth/me`)
    .then(response => {
        if (response.data.resultCode === 0) {
            return response.data.data
        }
    });

export const followUser = (id: string) => instance.post(`follow/${id}`)
    .then(response => {
        if (response.data.resultCode === 0) {
            return id
        } else return response.data.messages
    });

    export const unfollowUser = (id: string) => instance.delete(`follow/${id}`)
    .then(response => {
        if (response.data.resultCode === 0) {
            return id
        } else return response.data.messages
    });


