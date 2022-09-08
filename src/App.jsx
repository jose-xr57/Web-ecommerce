import {Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Routes/Home'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import ProductDetail from './components/Routes/ProductDetail'
import Header from './components/shared/Header'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProduct } from './store/slices/products.slice'
import axios from 'axios'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
// https://documenter.getpostman.com/view/5028918/UVypxw3W#8d80d26a-7c0a-4283-a272-253ae4144624
//  https://ecommerce-api-react.herokuapp.com/api/v1/products
// import "./components/home/cardHome.css"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct())
  }, [])


 
  

  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* <NavLink/> */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
          
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases/>} />
            <Route path="/cart" element={<Cart/>} />
          </Route>

      </Routes>
      
    </div>
  )
}

export default App
