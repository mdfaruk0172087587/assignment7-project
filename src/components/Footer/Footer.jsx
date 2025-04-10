import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-white text-primary-content p-10">
  <aside>
   
  <h1 className='text-3xl text-[#003EA4]'>Auction <span className='text-[#FFD337]'>Gallery</span></h1>
  <div className='font-normal text-xl text-black flex gap-2'>
    <p>Bid.</p>
    <p>Win.</p>
    <p>Own.</p>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl font-normal text-black poppins">Home</a>
    <a className="btn btn-ghost text-xl font-normal text-black poppins">Auctions</a>
    <a className="btn btn-ghost text-xl font-normal text-black poppins">Categories</a>
    <a className="btn btn-ghost text-xl font-normal text-black poppins">How to works</a>
  </div>
    <p className='font-normal text-lg text-black'> © {new Date().getFullYear()}AuctionHub. All rights reserved.</p>
  </aside>
 
</footer>
        </div>
    );
};

export default Footer;