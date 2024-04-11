import { useCallback, useState } from "react";
import { useGlobalBlog } from "./useBlogContext";
import { useLocation } from "wouter";
import { createPost } from "../services/createPost";
import { useGlobalAuth } from "./useAuthContext";

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

    const selectPostToEdit = useCallback(({ post }: { post: Post }) => {
        setBlog((prev: Blog) => {
            window.sessionStorage.setItem('selected_post_edit', JSON.stringify(post))
            return { ...prev, selected_post_edit: post }
        })
        setLocation("/post/edit")
    }, [])

    const createNewPost = useCallback(({ post }: { post: PostForm }) => {
        setState(prev => ({ ...prev, loading: true }))
        createPost({ newPost: post, access: auth.access})
        .then(newPost => {
            setBlog((prev: Blog) => {
                const newPosts = [...prev.posts, newPost]
                window.sessionStorage.setItem('posts', JSON.stringify(newPosts))
                return {...prev, posts: newPosts}
            })
        })
        .catch(() => setState(prev => ({ ...prev, error: true })))
        .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])

    return {
        isLoading: state.loading,
        isError: state.error,
        selected_post: blog.selected_post,
        existSelectedPost: blog.selected_post.id,
        selected_post_edit: blog.selected_post_edit,
        existSelectedPostEdit: blog.selected_post_edit.id,
        selectPost,
        selectPostToEdit,
        createNewPost,
    }
}