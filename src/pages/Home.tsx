import { PostList } from "../components/Post/PostList"
import { useGetPosts } from "../hooks/useGetPosts"

export const Home = () => {

    const { existPosts, posts } = useGetPosts()

    return (
        <>
            {existPosts && <PostList posts={posts} />}
        </>
    )
}