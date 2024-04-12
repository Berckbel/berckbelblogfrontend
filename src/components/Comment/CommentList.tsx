import { useGetComments } from "../../hooks/useGetComments"
import { EmptyMesage } from "../Feedback/EmptyMessage"
import { ErrorMessage } from "../Feedback/ErrorMessage"
import { Loader } from "../Feedback/Loader"
import { CommentItem } from "./CommentItem"

export const CommentList = () => {
    const { existComments, isLoading, isError, comments, user_id } = useGetComments()
    return (
        <>
            {existComments && comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} isOwner={comment.user.id === user_id} />
            ))}
            {!existComments && <EmptyMesage />}
            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
        </>
    )
}