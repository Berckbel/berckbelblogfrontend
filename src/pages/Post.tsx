import { PostItem } from "../components/PostItem"
import { useBlog } from "../hooks/useBlog"

export const Post = () => {

    const { selected_post } = useBlog()

    return (
        <>
            <PostItem post={selected_post} />
        </>
    )
}