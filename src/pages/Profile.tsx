import { NewPostButton } from "../components/Profile/NewPostButton"
import { PostUserList } from "../components/Profile/PostUserList"
import { WelcomeMessage } from "../components/Profile/WelcomeMessage"

export const Profile = () => {
    return (
        <>
            <WelcomeMessage />
            <NewPostButton />
            <PostUserList />
        </>
    )
}