import { Link } from "wouter"
import { useUser } from "../hooks/useUser"

export const Navbar = () => {

    const { isLogged, logout } = useUser()

    return (
        <>
            <header className={"min-w-max bg-purple-900 flex flex-row justify-between items-center text-white text-3xl font-extrabold"}>
                <div className={"flex p-3 ml-3"}>
                    <Link to={"/"} className={"rounded-full p-2 hover:bg-purple-500"}>
                        <h3>{"Home"}</h3>
                    </Link>
                </div>
                <div className={"flex flex-col md:flex-row"}>
                    {isLogged && <button className={"ml-auto mr-3 rounded-full p-2 hover:bg-purple-500"} onClick={() => logout()}>
                        <h3>{"Logout"}</h3>
                    </button>}
                    {!isLogged && <Link to={"/login"} className={"ml-auto mr-3 rounded-full p-2 hover:bg-purple-500"}>
                        <h3>{"Login"}</h3>
                    </Link>}
                    {!isLogged && <Link to={"/register"} className={"ml-auto mr-3 rounded-full p-2 hover:bg-purple-500"}>
                        <h3>{"Register"}</h3>
                    </Link>}
                </div>
            </header>
        </>
    )
}