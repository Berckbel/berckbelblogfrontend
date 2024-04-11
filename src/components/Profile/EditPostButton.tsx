import { useBlog } from "../../hooks/useBlog"

export const EditPostButton = ({ post }: { post: Post }) => {

    const { selectPostToEdit } = useBlog()

    const handleClick = () => {
        selectPostToEdit({ post })
    }

    return (
        <button
            onClick={handleClick}
            className={"m-2 p-2 text-white bg-purple-950 rounded-full"}
        >
            {"Edit"}
        </button>
    )
}
