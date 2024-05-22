import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../Assets/images/LightLogo.svg";
import avatar from "../Assets/images/avatar.svg";
import { RiArrowRightLine, RiDeleteBinLine, RiHeart3Line, RiLogoutBoxRLine, RiShoppingCart2Line } from '@remixicon/react';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import Nocart from "../Assets/images/empty-cart.png";
import { logout, removeToCart } from '../Redux/ProductRedeucer/Reducer';

const Navbar = () => {
    const navbarRef = useRef(null);
    const [move, setMove] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.product.user);

    const addCart = useSelector((state) => state.product.AddCart);

    useEffect(() => {
        gsap.from(navbarRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });
        gsap.to(navbarRef.current, {
            opacity: 1,
            duration: 1,
            delay: 1,
        });
    }, []);

    const handleCartMove = () => {
        setMove(!move);
    }

    const handleCartClose = () => {
        setMove(false);
    }

    const handleRemoveCart = (id) => {
        dispatch(removeToCart(id));
    }

    const logoutHandle = () => {
        dispatch(logout());
    }

    return (
        <div className='navbar' ref={navbarRef}>
            <nav className='navbar_main' style={{ position: "relative" }}>
                <div className={`cart_items_nav ${move ? 'move' : ''}`}>
                    <div className="cart_items_head">
                        <h5 className='cart_items_heads'>Cart Items</h5>
                        <button className='cart_items_close' onClick={handleCartClose}>X</button>
                    </div>

                    <div className="nav_list_main">
                        {addCart.length === 0 ? (
                            <div className="nav_no_cart">
                                <center>
                                    <img src={Nocart} alt="" className='no_cart_img' />
                                </center>
                                <p className='no_cart_text'>No Items In The Cart</p>
                            </div>
                        ) : (
                            addCart.map((cart) => (
                                <div className="cart_items-list" key={cart.id}>
                                    <div className="cart_items">
                                        <img src={cart.productImg} alt="" className='cart_items_img' />
                                        <div className="cart_items_text">
                                            <h6 className='cart_items_title'>{cart.productName}</h6>
                                            <p className='cart_items_price'>${cart.price}</p>
                                        </div>
                                    </div>
                                    <button className='cart_items_delete' onClick={() => handleRemoveCart(cart.id)}>
                                        <RiDeleteBinLine />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <button
                        className='nav_checkout'
                        onClick={() => navigate('checkout')}
                        disabled={addCart.length === 0}
                    >
                        CheckOut<RiArrowRightLine className='nav_checkout_icon' />
                    </button>
                </div>

                <NavLink to="/" activeClassName="activeLink">
                    <img src={logo} alt="" className='nav_logo' />
                </NavLink>

                <div className="nav_list">
                    <ul>
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product" >Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" >Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav_buttons">
                    <button className='nav_icon'><RiHeart3Line /></button>
                    <button className='nav_icon nav_count' onClick={handleCartMove}>
                        <RiShoppingCart2Line />
                        <p className='cart_items_count'>{addCart.length}</p>
                    </button>
                    {user ? ( // Conditional rendering for user profile
                        <div className="nav_profile">
                            <img src={avatar} alt="" className='nav_profile_img' />
                            <p className='nav_profile_text' style={{ marginRight: "8px" }}>{user.name}</p>
                            <button className='btn_logout' onClick={logoutHandle}>
                                <RiLogoutBoxRLine /><span className='btn-text'>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <button className='btn_logout' onClick={() => navigate('login')}>
                            <RiLogoutBoxRLine /><span className='btn-text'>Login</span>
                        </button>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
