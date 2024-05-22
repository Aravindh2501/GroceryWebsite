import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';

const ProductGallery = ({ id }) => {
    // const [gallery, setGallery] = useState({});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(`https://6636514b415f4e1a5e26ff23.mockapi.io/Product/${id}`);
    //             const data = res.data;
    //             setGallery(data);
    //         } catch (error) {
    //             console.error('Error fetching product data:', error);
    //         }
    //     };

    //     fetchData();

    // }, [id]);

    const gallery = useSelector((state) => state.card.Card);


    const images = [
        {
            original: gallery.productImg,
            thumbnail: gallery.productImg,
        },
        {
            original: gallery.productImg,
            thumbnail: gallery.productImg,
        },
        {
            original: gallery.productImg,
            thumbnail: gallery.productImg,
        },
    ];

    return (
        <div className='product_gallery'>
            <ImageGallery
                items={images}
                isRTL={true}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
            />
        </div>
    );
};

export default ProductGallery;
