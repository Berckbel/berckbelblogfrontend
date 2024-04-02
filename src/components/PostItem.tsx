export const PostItem = ({ post }: { post: Post }) => {
    return (
        <div key={post.id}>
            <h1 className={"text-purple-600 text-center text-4xl font-bold"}>{post.title}</h1>
            <img
                src={`${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}${post.image_url}`}
                alt={post.title}
                className={"w-full h-[300px] object-cover"}
            />
            <span className={"flex flex-row-reverse font-extrabold text-black"}>{post.created_at}</span>
        </div>
    )
}
