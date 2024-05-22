import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Main = () => {
    return (
        <div className='main'>
            <div className="container">
                <Navbar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main