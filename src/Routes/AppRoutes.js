import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import Main from '../Pages/Main'
import Home from '../Component/Home/Home'
import Product from '../Component/Products/Product'
import ProductDetail from '../Component/Products/ProductDetail'
import Contact from '../Component/Contact'
import CheckOut from '../Component/Extra/CheckOut'
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<SignUp />} />
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path='product' element={<Product />} />
                    <Route path='productdetail/:id' element={<ProductDetail />} />
                    {/* <Route path='contact' element={<Contact />} /> */}
                    <Route path='checkout' element={<CheckOut />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;