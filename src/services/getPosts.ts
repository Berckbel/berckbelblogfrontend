import axios from "axios"

export const getPosts = ({ access }: { access?: string } = { access: ""}): Promise<Post[]> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_API_PATH}`
    const config = access ? { headers: { Authorization: `JWT ${access}` } } : {}
    return axios
        .get<Post[]>(url, config)
        .then((res) => {
            const posts: Post[] = res.data
            return posts
        })
};