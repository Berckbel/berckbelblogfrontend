import { useEffect, useState } from "react";
import { useGlobalAuth } from "./useAuthContext";
import { getPosts } from "../services/getPosts";
import { useGlobalBlog } from "./useBlogContext";

export const useBlog = () => {
    const { auth } = useGlobalAuth()
    const { blog, setBlog } = useGlobalBlog()
    const [state, setState] = useState({ loading: false, error: false })

    useEffect(() => {
        setState(prev => ({...prev, loading: true}))
        getPosts({ access: auth.access }).then(posts => {
            setBlog((prev: Blog) => {
                return {...prev, posts}
            })
        })
            .catch(() => setState(prev => ({...prev, error: true})))
            .finally(() => setState(prev => ({...prev, loading: false})))
    }, [auth.access])

    return {
        isLogged: Boolean(auth.access),
        isLoading: state.loading,
        isError: state.error,
        posts: blog.posts
    }
}