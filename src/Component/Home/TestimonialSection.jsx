import React from 'react'
import { Grid } from '@mui/material';
import customerimg from "../../Assets/images/cutoimg.svg"
import avatar from "../../Assets/images/avatar.svg"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { RiStarFill, RiStarLine } from '@remixicon/react';
const TestimonialSection = () => {
    return (
        <div className='testimonialsection'>
            {/* <h2></h2> */}
            <Grid container spacing={2}>
                <Grid items sm={6}>
                    <div className="testo_img">
                        <center>
                            <img src={customerimg} alt="" className='custo-img' />
                        </center>
                        <div className="testo_card">
                            <h4>Our Reviewers</h4>
                            <AvatarGroup max={4}>
                                <Avatar alt="Remy Sharp" src={avatar} />
                                <Avatar alt="Travis Howard" src={avatar} />
                                <Avatar alt="Cindy Baker" src={avatar} />
                                <Avatar alt="Agnes Walker" src={avatar} />
                                <Avatar alt="Trevor Henderson" src={avatar} />
                            </AvatarGroup>
                        </div>
                    </div>
                </Grid>
                <Grid items sm={6}>
                    <div className="testo_text">
                        <h2 className='testo_title'>WHAT THEY SAY</h2>
                        <h6 className='testo_head'>What Our Customers Say About Us</h6>
                        <p className='testo_para'>Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you.</p>
                        <div className="testo_custo">
                            <img src={avatar} alt="" className='testo_custo_img' />
                            <div className="testo_custo_text">
                                <h6 className='testo_custo_title'>Theresa Jordan</h6>
                                <p className='testo_custo_para'>Food Enthusiast</p>
                            </div>
                        </div>
                        <div className="testo_star">
                            <RiStarFill className='star' />
                            <RiStarFill className='star' />
                            <RiStarFill className='star' />
                            <RiStarFill className='star' />
                            <RiStarLine className='star' />
                            <p>4.0</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default TestimonialSection