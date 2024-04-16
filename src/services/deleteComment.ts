import axios from "axios"

export const deleteComment = ({ comment, access }: { comment: PostComment, access: string }): Promise<PostComment> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_COMMENT_API_PATH}`
    const data = comment
    const config = access ?
        {
            headers: {
                'Authorization': `JWT ${access}`,
            },

            data: {
                comment_id: data.id
            }
        }
        : {}
    return axios
        .delete<PostComment>(url, config)
        .then((res) => {
            const deletedComment: PostComment = res.data
            return deletedComment
        })
};