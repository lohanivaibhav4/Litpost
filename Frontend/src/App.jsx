import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import MainLayout from "./components/layouts/MainLayout"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import AddPost from "./components/AddBlog"
import AuthRequired from "./components/AuthRequired"
import AuthProvider from "./contexts/AuthContext"
import BlogDetails from "./components/BlogDetails"

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path=":id" element={<BlogDetails />} />
          <Route path="signup" element={<Signup />}/>
          <Route path="signin" element={<Signin />}/>
            <Route element={<AuthRequired />} >
              <Route path="add-blog" element={<AddPost />}/>
            </Route>
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
