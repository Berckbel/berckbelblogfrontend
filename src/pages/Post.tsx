import { CommentForm } from "../components/Comment/CommentForm"
import { CommentList } from "../components/Comment/CommentList"
import { PostView } from "../components/Post/PostView"
import { useUser } from "../hooks/useUser"

export const Post = () => {

    const { isLogged } = useUser()

    return (
        <>
            <PostView />
            {isLogged && <CommentForm />}
            <CommentList />
        </>
    )
}