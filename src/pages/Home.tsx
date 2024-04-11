import { CategoryFilter } from "../components/Header/CategoryFilter"
import { PostList } from "../components/Post/PostList"

export const Home = () => {

    return (
        <>
            <CategoryFilter />
            <PostList />
        </>
    )
}