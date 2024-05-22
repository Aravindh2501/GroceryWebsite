import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../Redux/ProductRedeucer/Reducer';

const ProductFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const dispatch = useDispatch();

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleFilter = () => {
        dispatch(filterByCategory(selectedCategory));
    };

    return (
        <div className='productfilter'>
            <div className="product_category_filter">
                <h5>Category</h5>
                <div>
                    <input
                        type="checkbox"
                        checked={selectedCategory === "fruit"}
                        onChange={() => handleCategoryChange("fruit")}
                    />
                    <label>Fruits</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={selectedCategory === "vegetable"}
                        onChange={() => handleCategoryChange("vegetable")}
                    />
                    <label>Vegetables</label>
                </div>
                <button onClick={handleFilter}>Ok</button>
            </div>
        </div>
    );
};

export default ProductFilter;
