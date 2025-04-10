import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='bg-img min-h-[70hv]'>
            <div className='py-24 px-10'>
                <h1 className='text-3xl font-semibold text-white mb-3'>Bid on Unique Items from <br /> Around the World</h1>
                <p className='text-white font-light text-2xl mb-3'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <button className='btn p-3 rounded-xl bg-white text-black font-medium text-xl'>Explore Auctions</button>
            </div>
        </div>
    );
};

export default Banner;