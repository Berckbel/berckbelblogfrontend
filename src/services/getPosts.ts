import axios from "axios"

export const getPosts = ({ access = "" }: { access: string }): Promise<Post[]> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_API_PATH}`
    return axios
        .get<Post[]>(url, { headers: { Authorization: `JWT ${access}` } })
        .then((res) => {
            const posts: Post[] = res.data
            return posts
        })
};