import { useGetComments } from "../../hooks/useGetComments"
import { CommentItem } from "./CommentItem"

export const CommentList = () => {
    const { existComments, comments, user_id } = useGetComments()
    return (
        <>
            {existComments && comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} isOwner={comment.user.id === user_id} />
            ))}
        </>
    )
}