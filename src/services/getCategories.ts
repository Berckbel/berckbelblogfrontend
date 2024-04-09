import axios from "axios"

export const getCategories = ({ access }: { access: string } = { access: "" }): Promise<Category[]> => {
    const url: string = `${import.meta.env.VITE_BLOG_BACKEND_BASE_URL}/${import.meta.env.VITE_BLOG_CATEGORY_API_PATH}`
    const config = access ? { headers: { Authorization: `JWT ${access}` } } : {}
    return axios
        .get<Category[]>(url, config)
        .then((res) => {
            const categories: Category[] = res.data
            return categories
        })
};