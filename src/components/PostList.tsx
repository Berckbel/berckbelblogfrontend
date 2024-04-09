import { PostItem } from "./PostItem"

export const PostList = ({ posts }: { posts: Post[] } = { posts: [] }) => {
    return (
        <>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </>
    )
}