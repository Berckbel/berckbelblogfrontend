import { useContext } from "react";
import BlogContext from '../context/BlogContext'

export const useGlobalBlog = () => {
    return useContext(BlogContext)
}