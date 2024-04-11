import axios from "axios"

export const updatePost = ({ post, access }: { post: PostEditForm, access: string }): Promise<Post> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_API_PATH}`
    const data = post
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
        .put<Post>(url, data, config)
        .then((res) => {
            const updatedPost: Post = res.data
            return updatedPost
        })
};