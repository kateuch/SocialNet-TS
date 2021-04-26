import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "521c56f3-3091-4723-871a-57ee7f57ec6d"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {

 getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
})
    .then(response => {
        return response.data
    }
    );
},
    followUser (id: string) {
        return instance.post(`follow/${id}`)
    },

    unfollowUser (id: string) {
        return instance.delete(`follow/${id}`)
        },

     getProfile (userId: string)    {
         return instance.get(`profile/${userId}`)
         .then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    getAuthMe () {
        return instance.get(`auth/me`)
    }

}