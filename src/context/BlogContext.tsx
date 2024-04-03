import { createContext, useState, ReactNode } from 'react'

const Context = createContext<BlogContextType>({
    blog: {
        posts: [] as Post[],
        selected_post: {} as Post
    },
    setBlog: () => {}
})

const intialBlog: Blog = {
    posts: JSON.parse(window.sessionStorage.getItem('posts') || "[]") || [],
    selected_post: JSON.parse(window.sessionStorage.getItem('selected_post') || "{}") || {},
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