import React from 'react'
import {BrowserRouter as Router,Routes,Route,}from "react-router-dom"
import NavBar from './components/NavBar'
import Cart from './components/cart'
import Home from './components/home'
import "./app.css"
import NotFound from './components/NotFound'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <NavBar />
        <Routes>

          <Route path='/cart' element={<Cart/> } />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
