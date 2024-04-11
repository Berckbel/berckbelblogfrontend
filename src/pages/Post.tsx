import { CommentForm } from "../components/Comment/CommentForm"
import { CommentList } from "../components/Comment/CommentList"
import { PostView } from "../components/Post/PostView"

export const Post = () => {

    return (
        <>
            <PostView />
            <CommentForm />
            <CommentList />
        </>
    )
}