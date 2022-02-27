import React from 'react'
import Home from './Components/Home'
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'

const App = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </Router>
    )
}

export default App