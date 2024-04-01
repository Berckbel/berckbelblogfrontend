import { createContext, useState, ReactNode } from 'react'

const Context = createContext({})

const intialBlog: Blog = {
    posts: JSON.parse(window.sessionStorage.getItem('posts') || "{}") || {},
}

export const BlogContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [blog, setBlog] = useState<Blog>(intialBlog)

    return (
        <Context.Provider value={{ blog, setBlog }}>
            {children}
        </Context.Provider>
    )
}

export default Context