import { useGetPosts } from "../../hooks/useGetPosts"
import { EmptyMesage } from "../Feedback/EmptyMessage"
import { ErrorMessage } from "../Feedback/ErrorMessage"
import { Loader } from "../Feedback/Loader"
import { PostItem } from "./PostItem"

export const PostList = () => {
    const { existPosts, isLoading, isError, posts } = useGetPosts()
    return (
        <>
            {existPosts && posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
            {!existPosts && <EmptyMesage />}
            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
        </>
    )
}