import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Tooltip } from '@mui/material';
import { RiAwardLine, RiSearchEyeLine } from '@remixicon/react';
import { fetchData } from '../../Redux/ProductRedeucer/Api';

const ProductCard = () => {
    const products = useSelector(state => state.product.filteredProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const navigate = useNavigate();

    return (
        <div className='product_card'>
            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={3} key={product.id} >
                        <div className="pro_card">
                            <center>
                                <img src={product.productImg} alt={product.productName} className='pro_card_img' />
                            </center>
                            <div className=' pro_card_text'>
                                <h3 className='pro_card_title'>{product.productName}</h3>
                                <p className='pro_card_para'>{product.sellerName}</p>
                                <button className='pro_card_btn' onClick={() => navigate(`/productdetail/${product.id}`)}>
                                    <RiSearchEyeLine className='pro_card_view_icon' />View Detail
                                </button>
                            </div>
                            {['mango', 'apple', 'tomato', 'onion'].includes(product.productName.toLowerCase()) && (
                                <Tooltip title="Best Selling" placement="top">
                                    <p className='pro_card_selling'>
                                        <RiAwardLine className='pro_card_selling_icon' />
                                    </p>
                                </Tooltip>
                            )}
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductCard;
