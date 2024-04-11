import { useBlog } from "../../hooks/useBlog"

export const ViewPostButton = ({ post }: { post: Post}) => {

    const { selectPost } = useBlog()

    const handleClick = () => {
        selectPost({ post })
    }

    return (
        <button
            onClick={handleClick}
            className={"m-2 p-2 text-white bg-purple-500 rounded-full"}
        >
            {"View"}
        </button>
    )
}