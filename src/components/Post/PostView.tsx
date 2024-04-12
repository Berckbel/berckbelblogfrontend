import { useBlog } from "../../hooks/useBlog"
import { RichText } from "../RichEditor/RichText"

export const PostView = () => {
    const { selected_post } = useBlog()
    return (
        <div key={selected_post.id} className={"mb-5"}>
            <h1 className={"text-purple-700 text-center text-4xl font-bold mb-5 capitalize"}>{selected_post.title}</h1>
            <img
                src={`${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}${selected_post.image_url}`}
                alt={selected_post.title}
                className={"w-full h-[450px] object-cover"}
            />
            <span className={"flex flex-row-reverse font-extrabold text-black"}>{selected_post.created_at}</span>
            <section>
                <RichText initialContent={selected_post.description} />
            </section>
        </div>
    )
}
