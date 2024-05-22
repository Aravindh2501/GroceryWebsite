import React from 'react';
import HomeSection from './HomeSecction';
import TopCategories from './TopCategories';
import FruitsSection from './FruitsSection';
import AboutSection from './AboutSection';
import TestimonialSection from './TestimonialSection';


const Home = () => {
    return (
        <div className='home'>
            <HomeSection />
            <TopCategories />
            <FruitsSection />
            <AboutSection />
            <TestimonialSection />
        </div>
    );
};

export default Home;
