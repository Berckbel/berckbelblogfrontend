import axios from "axios"

export const createUser = ({ email, password, re_password }: RegisterCredentials): Promise<User> => {
    const url: string = `${import.meta.env.VITE_BASE_URL}/auth/users/`
    return axios.post<User>(url, { email, password, re_password }).then(res => {
        const user: User = res.data
        return user
    })
}