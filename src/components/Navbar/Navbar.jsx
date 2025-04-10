import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost ">
        <h1 className='text-3xl text-[#003EA4]'>Auction <span className='text-[#FFD337]'>Gallery</span></h1>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl font-normal text-black poppins">Home</a>
    <a className="btn btn-ghost text-xl font-normal text-black poppins">Auctions</a>
    <a className="btn btn-ghost text-xl font-normal text-black poppins">Categories</a>
    <a className="btn btn-ghost text-xl font-normal text-black poppins">How to works</a>
  </div>
  <div className="navbar-end gap-4">
    
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item">9</span>
      </div>
    </button>





    
      <div className="indicator">
      <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
      </div>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;