import axios from "axios"

export const deletePost = ({ post, access }: { post: Post, access: string }): Promise<Post> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_API_PATH}`
    const data = post
    const config = access ?
        {
            headers: {
                'Authorization': `JWT ${access}`,
            },

            data: {
                post_id: data.id,
            }
        }
        : {}
    return axios
        .delete<Post>(url, config)
        .then((res) => {
            const updatedPost: Post = res.data
            return updatedPost
        })
};