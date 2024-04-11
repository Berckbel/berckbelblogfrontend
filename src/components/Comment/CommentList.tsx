import { useComment } from "../../hooks/useComment"
import { CommentItem } from "./CommentItem"

export const CommentList = () => {
    const { existComments, comments } = useComment()
    return (
        <>
            {existComments && comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </>
    )
}