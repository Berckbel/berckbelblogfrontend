import axios from "axios"

export const updateComment = ({ comment, access }: { comment: PostCommentEditForm, access: string }): Promise<PostComment> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_COMMENT_API_PATH}`
    const data = comment
    const config = access ?
        {
            headers: {
                'Authorization': `JWT ${access}`,
            }
        }
        : {}
    return axios
        .put<PostComment>(url, data, config)
        .then((res) => {
            const newComment: PostComment = res.data
            return newComment
        })
};