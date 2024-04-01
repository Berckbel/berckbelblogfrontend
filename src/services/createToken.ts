import axios from "axios"

export const createToken = ({ email, password }: LoginCredentials): Promise<LoginTokens> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/auth/jwt/create/`
    return axios.post<LoginTokens>(url, { email, password }).then(res => {
        const tokens: LoginTokens = res.data
        return tokens
    })
}