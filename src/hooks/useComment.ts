import { useCallback, useState } from "react"
import { useGlobalAuth } from "./useAuthContext"
import { useGlobalBlog } from "./useBlogContext"
import { createComment } from "../services/createComment"
import { updateComment } from "../services/updateComment"
import { deleteComment } from "../services/deleteComment"

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
                    return { ...prev, comments: newComments }
                })
            })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])

    const editComment = useCallback(({ comment }: { comment: PostCommentEditForm }) => {
        setState(prev => ({ ...prev, loading: true }))
        updateComment({ comment, access: auth.access })
            .then(editedComment => {
                setBlog((prev: Blog) => {
                    const comments = prev.comments
                    const pos = comments.findIndex(comment => comment.id === editedComment.id)
                    if (pos) {
                        comments[pos] = editedComment
                    }
                    const newComments = comments
                    return { ...prev, comments: newComments }
                })
            })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])

    const deleteOwnedComment = useCallback(({ commentToDelete }: { commentToDelete: PostComment }) => {

        if(auth.user.id !== commentToDelete.user.id) return

        setState(prev => ({ ...prev, loading: true }))
        deleteComment({ comment: commentToDelete, access: auth.access })
            .then(deletedComment => {

                console.log(deletedComment)

                setBlog((prev: Blog) => {
                    const newComments = prev.comments.filter(comment => comment.id !== commentToDelete.id)
                    return { ...prev, comments: newComments }
                })

            })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])

    return {
        isLoading: state.loading,
        isError: state.error,
        createNewComment,
        editComment,
        deleteOwnedComment,
    }
}