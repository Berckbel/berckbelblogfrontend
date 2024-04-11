import { useCallback, useState } from 'react'
import { useGlobalAuth } from '../hooks/useAuthContext'
import { createToken } from '../services/createToken'
import { getUser } from '../services/getUser'
import { createUser } from '../services/createUser'
import { useLocation } from 'wouter'

export const useUser = () => {
    const [_, setLocation] = useLocation();
    const { auth, setAuth } = useGlobalAuth()
    const [state, setState] = useState({ loading: false, error: false })

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt_refresh')
        window.sessionStorage.removeItem('jwt_access')
        window.sessionStorage.removeItem('user')
        setAuth({ refresh: "", access: "", user: {} as User, user_posts: [] as Post[] })

        setLocation("/")
    }, [])

    const register = useCallback(({ email, password, re_password }: RegisterCredentials) => {
        setState(prev => ({ ...prev, loading: true, error: false }))
        createUser({ email, password, re_password })
            .then()
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])

    const login = useCallback(({ email, password }: LoginCredentials) => {
        setState(prev => ({ ...prev, loading: true, error: false }))
        createToken({ email, password })
            .then(tokens => {

                window.sessionStorage.setItem('jwt_refresh', tokens.refresh)
                window.sessionStorage.setItem('jwt_access', tokens.access)
                setAuth((prev: Auth) => {
                    return {
                        ...prev,
                        refresh: tokens.refresh,
                        access: tokens.access,
                    }
                })

                getUser({ access: tokens.access })
                    .then(user => {
                        window.sessionStorage.setItem('user', JSON.stringify(user))
                        setAuth((prev: Auth) => ({ ...prev, user }))
                    })
                    .catch(() => setState(prev => ({ ...prev, error: true })))

                setLocation("/")
            })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])

    return {
        isLogged: Boolean(auth.access),
        isLoading: state.loading,
        isError: state.error,
        user: auth.user,
        logout,
        login,
        register,
    }
}