import React from 'react'
import meat from "../../Assets/images/meat.png"
import food from "../../Assets/images/healthy-food.png"
import vegatable from "../../Assets/images/vegetable.png"
import juice from "../../Assets/images/mango-juice.png"
import bread from "../../Assets/images/bread.png"




const TopCategories = () => {
    return (
        <div className='categories'>
            <h2 className='cate-head '>Top Categories</h2>
            <div className="cate_flex">

                <div className="cate_card">
                    <center>
                        <img src={food} alt="" className='cate_img' />
                    </center>
                    <h5 className='cate_text'>Browse All</h5>
                    <p className='cate_para'>(340 items)</p>
                </div>
                <div className="cate_card">
                    <center>
                        <img src={meat} alt="" className='cate_img' />
                    </center>
                    <h5 className='cate_text'>Meat</h5>
                    <p className='cate_para'>(340 items)</p>
                </div>
                <div className="cate_card">
                    <center>
                        <img src={vegatable} alt="" className='cate_img' />
                    </center>
                    <h5 className='cate_text'>Vegetables</h5>
                    <p className='cate_para'>(340 items)</p>
                </div>
                <div className="cate_card">
                    <center>
                        <img src={juice} alt="" className='cate_img' />
                    </center>
                    <h5 className='cate_text'>Juice</h5>
                    <p className='cate_para'>(340 items)</p>
                </div>
                <div className="cate_card">
                    <center>
                        <img src={bread} alt="" className='cate_img' />
                    </center>
                    <h5 className='cate_text'>Bread</h5>
                    <p className='cate_para'>(340 items)</p>
                </div>
            </div>
        </div>
    )
}

export default TopCategories