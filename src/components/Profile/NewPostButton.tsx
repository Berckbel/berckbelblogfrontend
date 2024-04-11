import { Link } from "wouter"

export const NewPostButton = () => {
    return (
        <Link to={"/post/create"}>
            <button
                type={"button"}
                className={"px-3 mb-5 bg-yellow-500 text-white font-black text-3xl rounded-lg max-w-fit hover:text-4xl"}
            >
                {"New Post +"}
            </button>
        </Link>
    )
}