import { useEffect, useState } from "react"
import { useGlobalBlog } from "./useBlogContext"
import { getCategories } from "../services/getCategories"

export const useGetCategories = () => {
    const { blog, setBlog } = useGlobalBlog()
    const [state, setState] = useState({ loading: false, error: false })

    useEffect(() => {
        if (blog.categories.length > 0) return

        setState(prev => ({ ...prev, loading: true }))
        getCategories().then(newCategories => {
            setBlog((prev: Blog) => {
                window.sessionStorage.setItem('categories', JSON.stringify(newCategories))
                return { ...prev, categories: newCategories }
            })
        })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])


    return {
        isLoading: state.loading,
        isError: state.error,
        existCategories: blog.categories.length,
        categories: blog.categories,
    }
}