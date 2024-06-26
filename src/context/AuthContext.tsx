import { createContext, useState, ReactNode } from 'react'

const Context = createContext<AuthContextType>({
    auth: {
        refresh: '',
        access: '',
        user: {} as User,
        user_posts: [] as Post[]
    },
    setAuth: () => { },
})

const intialAuth: Auth = {
    refresh: window.sessionStorage.getItem('jwt_refresh') || "",
    access: window.sessionStorage.getItem('jwt_access') || "",
    user: JSON.parse(window.sessionStorage.getItem('user') || "{}") || {},
    user_posts: JSON.parse(window.sessionStorage.getItem('user_posts') || "[]") || [],
}

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<Auth>(intialAuth)

    return (
        <Context.Provider value={{ auth, setAuth }}>
            {children}
        </Context.Provider>
    )
}

export default Context