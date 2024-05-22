import React from 'react'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'
import { Grid } from '@mui/material';
import ProductSearch from './ProductSearch';

const Product = () => {
    return (
        <div className='product'>
            <ProductSearch />
            <Grid container spacing={2}>
                <Grid item sm={2}>
                    <ProductFilter />
                </Grid>
                <Grid item sm={10}>
                    <ProductCard />
                </Grid>
            </Grid>
        </div>
    )
}

export default Product