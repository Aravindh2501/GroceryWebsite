import React, { useState } from 'react'
import { Grid } from '@mui/material'
import phone from "../Assets/images/Loginph.svg"
import { useDispatch } from 'react-redux'
import { login } from '../Redux/ProductRedeucer/Reducer'
import { useNavigate } from 'react-router-dom'
const Login = () => {


    const [loginData, setLoginData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const dispatch = useDispatch();
    const naviagte = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev, [name]: value
        }))
    }

    console.log(loginData);

    const { name, email, password } = loginData;


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginData))
        naviagte('/')
    };



    return (
        <div className='login'>
            <Grid container>
                <Grid item sm={6}>
                    <div className="login_left">
                        <center>
                            <img src={phone} className="login_img" alt='' />
                        </center>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div className="login_right">
                        <div className="login_card">
                            <h2 className='login_text'>Login</h2>
                            <form className='login_form' onSubmit={handleSubmit}>
                                <input onChange={handleChange} value={name} name='name' className="login_input" type="text" placeholder='Type Your Name' />
                                <input onChange={handleChange} value={email} name='email' className="login_input" type='email' placeholder='Enter Email' />
                                <input onChange={handleChange} value={password} name='password' className="login_input" type='password' placeholder='Enter Password' />
                                <button type="submit" className="login_btn">Login</button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

export default Login