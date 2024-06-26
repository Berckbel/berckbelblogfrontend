import { useEffect, useState } from "react"
import { getComments } from "../services/getComments"
import { useGlobalBlog } from "./useBlogContext"
import { useGlobalAuth } from "./useAuthContext"

export const useGetComments = () => {
    const { blog, setBlog } = useGlobalBlog()
    const { auth } = useGlobalAuth()
    const [state, setState] = useState({ loading: false, error: false })

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }))
        getComments({ post_id: blog.selected_post.id }).then(comments => {
            setBlog((prev: Blog) => {
                return { ...prev, comments: comments }
            })
        })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [blog.selected_post])


    return {
        isLoading: state.loading,
        isError: state.error,
        existComments: blog.comments.length > 0,
        comments: blog.comments,
        user_id: auth.user.id
    }
}