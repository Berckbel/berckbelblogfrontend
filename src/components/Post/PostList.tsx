import { useGetPosts } from "../../hooks/useGetPosts"
import { PostItem } from "./PostItem"

export const PostList = () => {
    const { existPosts, posts } = useGetPosts()
    return (
        <>
            {existPosts && posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </>
    )
}