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
import { Profile } from './pages/Profile'
import { useBlog } from './hooks/useBlog'

function App() {

  const { isLogged } = useUser()
  const { existSelectedPost, existSelectedPostEdit } = useBlog()

  return (
      <>
      <Navbar />
        <main className={"p-4 m-8 flex flex-col justify-center"}>
          <Route component={Home} path={"/"} />
          {existSelectedPost && <Route component={Post} path={"/post"} />}
          {existSelectedPostEdit && isLogged &&<Route component={PostEdit} path={"/post/edit"} />}
          {isLogged &&<Route component={PostCreate} path={"/post/create"} />}
          {isLogged &&<Route component={Profile} path={"/profile"} />}
          {!isLogged && <Route component={Login} path={"/login"} />}
          {!isLogged && <Route component={Register} path={"/register"} />}
        </main>
      </>
  )
}

export default App
