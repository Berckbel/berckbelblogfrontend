import { useCallback, useEffect, useState } from "react";
import { useGlobalAuth } from "./useAuthContext";
import { getPosts } from "../services/getPosts";
import { useGlobalBlog } from "./useBlogContext";
import { useLocation } from "wouter";

export const useBlog = () => {
    const [_, setLocation] = useLocation()
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

    const selectPost = useCallback(({ post }: { post: Post }) => {
        setBlog((prev: Blog) => {
            window.sessionStorage.setItem('selected_post', JSON.stringify(post))
            return { ...prev, selected_post: post }
        })
        setLocation("/post")
    }, [])

    return {
        isLogged: Boolean(auth.access),
        isLoading: state.loading,
        isError: state.error,
        posts: blog.posts,
        selected_post: blog.selected_post,
        selectPost,
    }
}