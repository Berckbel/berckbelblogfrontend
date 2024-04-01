import axios from "axios"

export const getUser = ({ access }: { access: string }): Promise<User> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/auth/users/me/`
    return axios
        .get<User>(url, { headers: { Authorization: `JWT ${access}` } })
        .then((res) => {
            const user: User = res.data
            return user
        })
};