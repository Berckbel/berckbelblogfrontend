import { useEffect, useState } from "react"
import { useGlobalAuth } from "./useAuthContext"
import { getUserPosts } from "../services/getUserPosts"

export const useGetUserPosts = () => {

    const { auth, setAuth } = useGlobalAuth()
    const [state, setState] = useState({ loading: false, error: false })

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }))
        getUserPosts({ access: auth.access }).then(userPosts => {
            setAuth((prev: Auth) => {
                window.sessionStorage.setItem('user_posts', JSON.stringify(userPosts))
                return { ...prev, user_posts: userPosts }
            })
        })
            .catch(() => setState(prev => ({ ...prev, error: true })))
            .finally(() => setState(prev => ({ ...prev, loading: false })))
    }, [])


    return {
        isLoading: state.loading,
        isError: state.error,
        existUserPosts: auth.user_posts.length > 0,
        user_posts: auth.user_posts,
    }
}