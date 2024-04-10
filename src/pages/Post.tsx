import { PostView } from "../components/Post/PostView"
import { useBlog } from "../hooks/useBlog"

export const Post = () => {

    const { selected_post } = useBlog()

    return (
        <>
            <PostView post={selected_post} />
        </>
    )
}