import { useCallback, useState } from "react";
import { useGlobalBlog } from "./useBlogContext";
import { useLocation } from "wouter";

export const useBlog = () => {
    const [_, setLocation] = useLocation()
    const { blog, setBlog } = useGlobalBlog()
    const [state, setState] = useState({ loading: false, error: false })

    const selectPost = useCallback(({ post }: { post: Post }) => {
        setBlog((prev: Blog) => {
            window.sessionStorage.setItem('selected_post', JSON.stringify(post))
            return { ...prev, selected_post: post }
        })
        setLocation("/post")
    }, [])

    const selectPostToEdit = useCallback(({ post }: { post: Post }) => {
        setBlog((prev: Blog) => {
            window.sessionStorage.setItem('selected_post_edit', JSON.stringify(post))
            return { ...prev, selected_post_edit: post }
        })
        setLocation("/post/edit")
    }, [])

    return {
        isLoading: state.loading,
        isError: state.error,
        selected_post: blog.selected_post,
        selected_post_edit: blog.selected_post_edit,
        selectPost,
        selectPostToEdit,
    }
}