import { useBlog } from "../hooks/useBlog"

export const Home = () => {

    const { posts } = useBlog()

    return (
        <>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                    </div>
                ))
            }
        </>
    )
}