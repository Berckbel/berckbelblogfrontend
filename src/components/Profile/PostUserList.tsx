import { useGetUserPosts } from "../../hooks/useGetUserPosts"
import { EmptyMesage } from "../Feedback/EmptyMessage"
import { ErrorMessage } from "../Feedback/ErrorMessage"
import { Loader } from "../Feedback/Loader"
import { PostUserItem } from "./PostUserItem"

export const PostUserList = () => {

    const { existUserPosts, isLoading, isError, user_posts } = useGetUserPosts()

    return (
        <>
            <div className={"flex flex-row flex-wrap"}>
                {existUserPosts && user_posts.map(post => (
                    <PostUserItem key={post.id} post={post} />
                ))}
            </div>
            {!existUserPosts && <EmptyMesage />}
            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
        </>
    )
}