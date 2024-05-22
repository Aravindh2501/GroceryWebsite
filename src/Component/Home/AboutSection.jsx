import { Grid } from '@mui/material'
import React from 'react'
import orderimg1 from "../../Assets/images/orderimg1.svg"
import orderimg2 from "../../Assets/images/orderimg2.svg"
import orderimg3 from "../../Assets/images/orderimg3.svg"

const AboutSection = () => {
  return (
    <div className='aboutsection'>
      <h6 className='as_title_mini'>WHAT WE SERVE</h6>
      <h2 className='as_title'>Your Favorite Food Delivery Partner</h2>
      <div className="about_order">
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <div className="about_order-card">
              <center>
                <img src={orderimg1} alt="" className='about_order-img' />
              </center>
              <h3 className='about_order-title'>Easy To Order</h3>
              <p className='about_order-para'>You only need a few steps in ordering food</p>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className="about_order-card">
              <center>
                <img src={orderimg3} alt="" className='about_order-img' />
              </center>
              <h3 className='about_order-title'>Quick Delivery</h3>
              <p className='about_order-para'>Get your food delivered at your doorstep in no time</p>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className="about_order-card">
              <center>
                <img src={orderimg2} alt="" className='about_order-img' />
              </center>
              <h3 className='about_order-title'>Quality Food</h3>
              <p className='about_order-para'>Enjoy delicious and freshly prepared meals</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default AboutSection
