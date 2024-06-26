import { useBlog } from "../../hooks/useBlog"

export const PostItem = ({ post }: { post: Post }) => {

    const { selectPost } = useBlog()

    return (
        <div key={post.id} className={"cursor-pointer mb-10 hover:underline"} onClick={() => selectPost({ post })}>
            <h1 className={"text-purple-700 text-4xl font-black mb-5 capitalize"}>{post.title}</h1>
            <img
                src={`${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}${post.image_url}`}
                alt={post.title}
                className={"w-full h-[350px] object-cover"}
            />
            <span className={"flex flex-row-reverse font-extrabold text-black"}>{post.created_at}</span>
        </div>
    )
}
