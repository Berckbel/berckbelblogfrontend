import { PostList } from "../components/PostList"
import { useGetPosts } from "../hooks/useGetPosts"

export const Home = () => {

    const { posts } = useGetPosts()

    return (
        <>
            <PostList posts={posts} />
        </>
    )
}