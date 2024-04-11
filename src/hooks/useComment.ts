import { useEffect, useState } from "react"
import { getComments } from "../services/getComments"
import { useBlog } from "./useBlog"

export const useComment = () => {
    const { selected_post } = useBlog()
    const [state, setState] = useState({ loading: false, error: false })
    const [comments, setComments] = useState<PostComment[]>([])

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }))
        getComments({ post_id: selected_post.id }).then(comments => {
            setComments(comments)
        })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [selected_post])


    return {
        isLoading: state.loading,
        isError: state.error,
        existComments: comments.length,
        comments: comments,
    }
}