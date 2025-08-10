import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import MainLayout from "./components/layouts/MainLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
