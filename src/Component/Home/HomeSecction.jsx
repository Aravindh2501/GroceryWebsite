import { Grid } from "@mui/material";
import React from "react";
import iphone from "../../Assets/images/iPhone 13.svg";
import location from "../../Assets/images/placeholder.png";
import salad from "../../Assets/images/salad.png";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {

    const navigate = useNavigate();

    return (
        <div className="HomeSection">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="hs_text_content">
                        <h4 className="home_title">
                            Make healthy food Wishlist
                            <span>
                                <div className="words">
                                    <span>Organic</span>
                                    <span>Nutritious</span>
                                    <span>Pure</span>
                                    <span>Clean</span>
                                    <span>Fresh</span>
                                </div>
                            </span>
                            grocery
                        </h4>
                        <p className="home_para">
                            Get the best quality and most delicious food in the world , oyur
                            can get them all using our wesbtie
                        </p>
                        <button className="home_button" onClick={() => navigate("product")}>Shop Now</button>

                        <div className="store_button">
                            <p className="store_title">DOWNLOAD APP :</p>
                            <div className="store_btns">
                                <div className="play_store">
                                    <img src="" alt="" className="store_img" />
                                </div>
                                <div className="app_store">
                                    <img src="" alt="" className="app_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="hs_img">
                        <center>
                            <img src={iphone} alt="" className="hs_img_iphone" />
                        </center>
                        <div className="hs_card1">
                            <div className="hs_icon">
                                <img src={location} alt="" className="hs_icon_loco" />
                            </div>
                            <div className="text">
                                <p className="hs_title">Fast Delivery</p>
                                <p className="hs_para">Free of cost any delivery</p>
                            </div>
                        </div>
                        <div className="hs_card2">
                            <div className="hs_icon">
                                <img src={salad} alt="" className="hs_icon_salad" />
                            </div>
                            <div className="text">
                                <p className="hs_title">100% Fresh</p>
                                <p className="hs_para">Quallity maintain</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomeSection;
