import { useContext } from "react";
import BlogContext from '../context/BlogContext'

export const useGlobalAuth = () => {
    return useContext(BlogContext)
}