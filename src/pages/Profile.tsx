import { useUser } from "../hooks/useUser"

export const Profile = () => {
    const { user } = useUser()
    return (
        <h1>{`Welcome to your profile ${user.email}`}</h1>
    )
}