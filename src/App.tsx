import './App.css'
import { Route } from "wouter"
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Navbar } from './components/Header/Navbar'
import { useUser } from './hooks/useUser'
import { Post } from './pages/Post'
import { PostCreate } from './pages/PostCreate'
import { PostEdit } from './pages/PostEdit'

function App() {

  const { isLogged } = useUser()

  return (
      <>
      <Navbar />
        <main className={"p-4 m-16 flex flex-col justify-center"}>
          <Route component={Home} path={"/"} />
          <Route component={Post} path={"/post"} />
          {isLogged &&<Route component={PostEdit} path={"/post/edit"} />}
          {isLogged &&<Route component={PostCreate} path={"/post/create"} />}
          {!isLogged && <Route component={Login} path={"/login"} />}
          {!isLogged && <Route component={Register} path={"/register"} />}
        </main>
      </>
  )
}

export default App
