import { CategoryFilter } from "../components/CategoryFilter"
import { PostList } from "../components/Post/PostList"

export const Home = () => {

    return (
        <>
            <CategoryFilter />
            <PostList />
        </>
    )
}