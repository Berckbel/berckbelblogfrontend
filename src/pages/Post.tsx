import { PostView } from "../components/PostView"
import { useBlog } from "../hooks/useBlog"

export const Post = () => {

    const { selected_post } = useBlog()

    return (
        <>
            <PostView post={selected_post} />
        </>
    )
}