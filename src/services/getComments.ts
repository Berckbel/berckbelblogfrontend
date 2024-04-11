import axios from "axios"

export const getComments = ({ access, post_id }: { access?: string, post_id: number }): Promise<PostComment[]> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_COMMENT_API_PATH}${post_id ? `?post_id=${post_id}` : ``}`
    const config = access ? { headers: { Authorization: `JWT ${access}` } } : {}
    return axios
        .get<PostComment[]>(url, config,)
        .then((res) => {
            const posts: PostComment[] = res.data
            return posts
        })
};