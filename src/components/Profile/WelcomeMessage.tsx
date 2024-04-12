import { useUser } from "../../hooks/useUser"

export const WelcomeMessage = () => {
    const { user } = useUser()
    return (
        <h1
            className={`
                flex flex-row 
                self-center 
                max-w-max p-2 
                rounded-lg 
                bg-purple-700 
                text-white 
                font-bold 
                capitalize 
                text-2xl 
                mb-4
            `}
        >
            {`Welcome to your profile ${user.email.split('@')[0]} !`}
        </h1>
    )
}