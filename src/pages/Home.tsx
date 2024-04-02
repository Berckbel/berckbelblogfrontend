import { PostList } from "../components/PostList"
import { useBlog } from "../hooks/useBlog"

export const Home = () => {

    const { posts } = useBlog()

    return (
        <>
            <PostList posts={posts} />
        </>
    )
}