export const PostUserItem = ({ post }: { post: Post }) => {
    return (
        <div className={"flex flex-col mr-20 mb-5 border-2"}>
            <h1 className={"min-w-full text-center bg-purple-800 text-white self-center font-black text-xl capitalize"}>{post.title}</h1>
            <img
                src={`${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}${post.image_url}`}
                alt={post.title}
                className={"w-[250px] h-[250px]"}
            />
            <span className={"flex flex-row self-end font-bold text-black underline"}>{post.created_at}</span>
            <section className={"flex flex-row border-y-4 min-w-full self-center justify-center"}>
                <button className={"m-2 p-2 text-white bg-purple-500 rounded-full"}>{"View"}</button>
                <button className={"m-2 p-2 text-white bg-purple-950 rounded-full"}>{"Edit"}</button>
                <button className={"m-2 p-2 text-white bg-red-700 rounded-full"}>{"Delete"}</button>
            </section>
        </div>
    )
}