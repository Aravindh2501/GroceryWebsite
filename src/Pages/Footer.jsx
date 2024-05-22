import React from 'react'
import logo from "../Assets/images/LightLogo.svg"
import { RiMailSendLine, RiMapPinLine, RiPhoneLine, RiTimerFlashFill } from '@remixicon/react'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="div1">
                <div className="footer_logo">
                    <img src={logo} alt="" className='footer_logo_img' />
                    <div className="footer_logo_text">
                        <h4>Happy Shop</h4>
                        <p>Grocery😂</p>
                    </div>
                </div>
                <ul>
                    <li><span><RiMapPinLine className='footer_icon' /></span>Address : 1762 School House Road </li>
                    <li><span><RiPhoneLine className='footer_icon' /></span>Call Us: 1233-777</li>
                    <li><span><RiMailSendLine className='footer_icon' /></span>Email: groceyish@contact.com</li>
                    <li><span><RiTimerFlashFill className='footer_icon' /></span>Work hours: 8:00 - 20:00, Sunday -  Thursday</li>
                </ul>
            </div>
            <div className="div2">
                <h4>Account</h4>
                <ul>
                    <li>Wishlist</li>
                    <li>Cart</li>
                    <li>Track Order</li>
                    <li>Shipping Details</li>
                </ul>
            </div>
            <div className="div2">
                <h4>Useful links</h4>
                <ul>
                    <li>About Us</li>
                    <li>Hot deals</li>
                    <li>Promotions</li>
                    <li>New products</li>
                </ul>
            </div>
            <div className="div2">
                <h4>Help Center</h4>
                <ul>
                    <li>Payments</li>
                    <li>Refund</li>
                    <li>Shipping</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer