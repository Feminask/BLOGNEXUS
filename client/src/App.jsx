import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Header from './components/Header'
import { Footer } from 'flowbite-react'
import FooterCom from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'
import Search from './pages/Search'
import MyPosts from './pages/MyPosts'

function App() {
  return (
<>
     <BrowserRouter >
     <ScrollToTop />
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
      <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      <Route path='/search' element={<Search></Search>}></Route>

      <Route element={<PrivateRoute></PrivateRoute>}>   
         <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
         <Route path='/my-posts' element={<MyPosts></MyPosts>}></Route>


      </Route>
      <Route path='/post/:postSlug' element={<PostPage />} />
      <Route path='/create-post' element={<CreatePost></CreatePost>}></Route>
      <Route path='/update-post/:postId' element={<UpdatePost></UpdatePost>}></Route>


     </Routes>
     <FooterCom></FooterCom>
     </BrowserRouter>
  
</>  )
}

export default App
