import { useCallback, useState } from "react"
import { useGlobalAuth } from "./useAuthContext"
import { useGlobalBlog } from "./useBlogContext"
import { createComment } from "../services/createComment"

export const useComment = () => {
    const { auth } = useGlobalAuth()
    const { setBlog } = useGlobalBlog()
    const [state, setState] = useState({ loading: false, error: false })

    const createNewComment = useCallback(({ newComment }: { newComment: PostCommentForm }) => {
        setState(prev => ({ ...prev, loading: true }))
        createComment({ newComment, access: auth.access })
        .then(newComment => {
            setBlog((prev: Blog) => {
                const newComments = [...prev.comments, newComment]
                return {...prev, comments: newComments}
            })
        })
        .catch(() => setState(prev => ({ ...prev, error: true })))
        .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])

    return {
        isLoading: state.loading,
        isError: state.error,
        createNewComment,
    }
}