import { useBlog } from "../../hooks/useBlog"

export const DeletePostButton = ({ post }: { post: Post }) => {

    const { isLoading, deleteUserPost } = useBlog()

    const handleClick = () => {
        deleteUserPost({ post })
    }

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className={"m-2 p-2 text-white bg-red-700 rounded-full"}
        >
            {"Delete"}
        </button>
    )
}