import { useCallback, useState } from "react"
import { useGlobalBlog } from "./useBlogContext"

export const useCategory = () => {
    const { blog, setBlog } = useGlobalBlog()
    const [state, setState] = useState({ loading: false, error: false })

    const selectCategory = useCallback(({ category }: { category: Category }) => {
        setState(prev => ({ ...prev, loading: true }))
        setBlog((prev: Blog) => {
            window.sessionStorage.setItem('selected_category', JSON.stringify(category))
            return { ...prev, selected_category: category }
        })
    }, [])

    return {
        isLoading: state.loading,
        isError: state.error,
        categories: blog.categories,
        existSelectedCategory: blog.selected_category.id > 0,
        selected_category: blog.selected_category,
        selectCategory,
    }
}