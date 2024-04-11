export const DeletePostButton = ({ post }: { post: Post }) => {

    const handleClick = () => {
        console.log(post)
    }

    return (
        <button
            onClick={handleClick}
            className={"m-2 p-2 text-white bg-red-700 rounded-full"}
        >
            {"Delete"}
        </button>
    )
}