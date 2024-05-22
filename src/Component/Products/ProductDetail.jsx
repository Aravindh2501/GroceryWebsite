// ProductDetail component
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCard } from '../../Redux/CardReducer/CardApi';
import { RiShoppingBasket2Line } from '@remixicon/react';
import { addToCart } from '../../Redux/ProductRedeucer/Reducer';

const ProductDetail = () => {
    let { id } = useParams();

    const cardDetails = useSelector((state) => state.card.Card);
    const addCart = useSelector((state) => state.product.AddCart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCard(id));
    }, [dispatch, id]);

    // console.log("cardDetails:", cardDetails);


    const [clicked, setClicked] = useState(false);



    const handleClick = (product) => {
        const isProductInCart = addCart.some(item => item.id === product.id);
        if (!isProductInCart) {
            dispatch(addToCart(product));
            setClicked(true);
            setTimeout(() => {
                setClicked(false);
            }, 100);
        }
    };

    return (
        <div className='productDetail'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="prod_detail_left">
                        <ProductGallery id={id} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="prod_detail_right">
                        <p className='Prod_detail_category'>{cardDetails.category}</p>
                        <p className='Prod_detail_productname'>{cardDetails.productName}</p>
                        <p className='Prod_detail_description'> {cardDetails.description}</p>
                        <p className='Prod_detail_price'>$ <span className='Prod_detail_val'>
                            {cardDetails.price}</span></p>
                        <div className="prod_buttons">
                            {/* <div className="prod_quantity_btns">
                                <button className='prod_add_btn'><RiAddLine /></button>
                                <p className='prod_text_btn'>10</p>
                                <button className='prod_minus_btn'><RiSubtractLine /></button>
                            </div> */}
                            <div className={`prod_cart_btn ${clicked ? 'clicked' : ''}`} onClick={() => handleClick(cardDetails)}>
                                <RiShoppingBasket2Line className='prod_cart_icon' /> Add To Cart
                            </div>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </div >
    );
};

export default ProductDetail;
