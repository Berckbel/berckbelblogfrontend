import { Link } from "wouter"

export const NewPostButton = () => {
    return (
        <Link to={"/post/create"} className={"max-w-fit"}>
            <button
                type={"button"}
                className={"max-w-fit px-3 mb-5 bg-yellow-500 text-white font-black text-3xl rounded-lg hover:text-4xl"}
            >
                {"New Post +"}
            </button>
        </Link>
    )
}