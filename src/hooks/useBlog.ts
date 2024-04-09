import { useCallback, useState } from "react";
import { useGlobalAuth } from "./useAuthContext";
import { useGlobalBlog } from "./useBlogContext";
import { useLocation } from "wouter";

export const useBlog = () => {
    const [_, setLocation] = useLocation()
    const { auth } = useGlobalAuth()
    const { blog, setBlog } = useGlobalBlog()
    const [state, setState] = useState({ loading: false, error: false })

    const selectPost = useCallback(({ post }: { post: Post }) => {
        setBlog((prev: Blog) => {
            window.sessionStorage.setItem('selected_post', JSON.stringify(post))
            return { ...prev, selected_post: post }
        })
        setLocation("/post")
    }, [])

    return {
        isLoading: state.loading,
        isError: state.error,
        selected_post: blog.selected_post,
        selectPost,
    }
}