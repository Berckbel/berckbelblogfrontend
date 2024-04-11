import { useGetUserPosts } from "../../hooks/useGetUserPosts"
import { PostUserItem } from "./PostUserItem"

export const PostUserList = () => {

    const { existUserPosts, user_posts } = useGetUserPosts()

    return (
        <div className={"flex flex-row flex-wrap"}>
            {existUserPosts && user_posts.map(post => (
                <PostUserItem key={post.id} post={post} />
            ))}
        </div>
    )
}