import axios from "axios"

export const createPost = ({ newPost, access }: { newPost: PostForm, access: string }): Promise<Post> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_API_PATH}`
    const data = newPost
    const config = access ?
        {
            headers: {
                'Authorization': `JWT ${access}`,
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }
        : {}
    return axios
        .post<Post>(url, data, config)
        .then((res) => {
            const newPost: Post = res.data
            return newPost
        })
};