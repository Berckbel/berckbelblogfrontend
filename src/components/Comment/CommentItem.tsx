import { CommentEditForm } from "./CommentEditForm"

export const CommentItem = ({ comment, isOwner }: { comment: PostComment, isOwner: boolean }) => {
    return (
        <>
            {!isOwner &&
                <div className={"flex flex-col p-2 m-2 border-2 border-purple-900"}>
                    <h4 className={"font-extrabold"}>{comment.user.email}</h4>
                    <p>{comment.comment}</p>
                    <span className={"font-semibold"}>{comment.created_at}</span>
                </div>
            }
            {isOwner && <CommentEditForm comment={comment} />}
        </>
    )
}