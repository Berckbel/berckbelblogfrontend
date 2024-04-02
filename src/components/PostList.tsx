import { PostItem } from "./PostItem"

export const PostList = ({ posts }: { posts: Post[] }) => {
    return (
        posts.map(post => (
            <PostItem key={post.id} post={post} />
        ))
    )
}