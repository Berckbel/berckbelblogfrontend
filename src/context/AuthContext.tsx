import { createContext, useState, ReactNode } from 'react'

const Context = createContext({})

const intialAuth: Auth = {
    refresh: window.sessionStorage.getItem('jwt_refresh') || "",
    access: window.sessionStorage.getItem('jwt_access') || "",
    user: JSON.parse(window.sessionStorage.getItem('user') || "{}") || {},
}

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<Auth>(intialAuth)

    return (
        <Context.Provider value={{ auth, setAuth }}>
            {children}
        </Context.Provider>
    )
}

export default Context