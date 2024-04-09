import { createContext, useState, ReactNode } from 'react'

const Context = createContext<BlogContextType>({
    blog: {
        posts: [] as Post[],
        categories: [] as Category[],
        selected_post: {} as Post,
        selected_post_edit: {} as Post
    },
    setBlog: () => {}
})

const intialBlog: Blog = {
    posts: JSON.parse(window.sessionStorage.getItem('posts') || "[]") || [],
    categories: JSON.parse(window.sessionStorage.getItem('categories') || "[]") || [],
    selected_post: JSON.parse(window.sessionStorage.getItem('selected_post') || "{}") || {},
    selected_post_edit: JSON.parse(window.sessionStorage.getItem('selected_post_edit') || "{}") || {},
}

export const BlogContextProvider = ({ children }: { children: ReactNode }) => {
    const [blog, setBlog] = useState<Blog>(intialBlog)

    return (
        <Context.Provider value={{ blog, setBlog }}>
            {children}
        </Context.Provider>
    )
}

export default Context