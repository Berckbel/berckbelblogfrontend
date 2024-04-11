export const CommentItem = ({ comment }: {comment: PostComment}) => {
    return (
        <div>
            <h4>{comment.user.email}</h4>
            <p>{comment.comment}</p>
            <span>{comment.created_at}</span>
        </div>
    )
}