import './App.css'
import { Route } from "wouter"
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Navbar } from './components/Navbar'
import { useUser } from './hooks/useUser'

function App() {

  const { isLogged } = useUser()

  return (
      <>
      <Navbar />
        <main className={"p-4 m-4 flex flex-col md:flex-row"}>
          <Route component={Home} path={"/"} />
          {!isLogged && <Route component={Login} path={"/login"} />}
          {!isLogged && <Route component={Register} path={"/register"} />}
        </main>
      </>
  )
}

export default App
