import { useCallback, useState } from "react";
import { useGlobalBlog } from "./useBlogContext";
import { useLocation } from "wouter";
import { createPost } from "../services/createPost";
import { useGlobalAuth } from "./useAuthContext";
import { updatePost } from "../services/updatePost";

export const useBlog = () => {
    const [_, setLocation] = useLocation()
    const { auth, setAuth } = useGlobalAuth()
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
        createPost({ newPost: post, access: auth.access })
            .then(newPost => {
                setBlog((prev: Blog) => {
                    const newPosts = [...prev.posts, newPost]
                    window.sessionStorage.setItem('posts', JSON.stringify(newPosts))
                    return { ...prev, posts: newPosts }
                })

                setAuth((prev: Auth) => {
                    const newPosts = [...prev.user_posts, newPost]
                    window.sessionStorage.setItem('user_posts', JSON.stringify(newPosts))
                    return { ...prev, user_posts: newPosts }
                })
                setLocation("/")
            })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])

    const updateSelectedPost = useCallback(({ post }: { post: PostEditForm }) => {

        if (!(auth.user.id === post.user.id)) return

        setState(prev => ({ ...prev, loading: true }))
        updatePost({ access: auth.access, post })
            .then(editedPost => {
                setBlog((prev: Blog) => {
                    const filteredPosts = prev.posts.filter(post => post.id !== editedPost.id)
                    const newPosts = [...filteredPosts, editedPost]
                    window.sessionStorage.setItem('posts', JSON.stringify(newPosts))
                    window.sessionStorage.setItem('selected_post_edit', JSON.stringify(editedPost))
                    return { ...prev, posts: newPosts, selected_post_edit: editedPost }
                })

                setAuth((prev: Auth) => {
                    const filteredPosts = prev.user_posts.filter(user_post => user_post.id !== editedPost.id)
                    const newPosts = [...filteredPosts, editedPost]
                    window.sessionStorage.setItem('user_posts', JSON.stringify(newPosts))
                    return { ...prev, user_posts: newPosts }
                })

                setLocation("/profile")
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
        updateSelectedPost,
    }
}