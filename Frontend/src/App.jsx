import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import MainLayout from "./components/layouts/MainLayout"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import AddPost from "./components/AddBlog"
import AuthRequired from "./components/AuthRequired"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="signin" element={<Signin />}/>

          <Route element={<AuthRequired />} >
            <Route path="add-blog" element={<AddPost />}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
