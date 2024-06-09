
import React, { useState } from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { useSelector } from 'react-redux';

import  {Link} from 'react-router-dom'



const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems)


  return (
    <nav className="gradientBg p-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-3xl font-bold">Kaaftoon</div>
          <input 
            type="text" 
            placeholder="Search for products" 
            className="hidden md:block px-28  py-2 rounded-md w-full max-w-2xl"
          />
        </div>
        <div className="hidden md:flex space-x-7 text-white items-center">
          <div className="flex space-x-2 items-center">
           <Link to={'/'}> <span>Home</span> </Link>
          </div>
          <div className="flex space-x-2 items-center">
           <Link to={'/dashboard/total'}> <span>Dashbord</span> </Link>
          </div>
          <div className="flex space-x-2 items-center">
           <Link to={'/shop'}> <span>Shop</span> </Link> 
          </div>
          <div className="flex space-x-2 items-center">
           <Link to={'/about'}> <span>About</span> </Link> 
          </div>
         
          <div className="flex space-x-2 items-center">
            <FaUser />
            <span className='cursor-pointer'>Login / Register</span>
          </div>
          <FaHeart className='hover:text-red-600 text-xl'/>
          <ol className='text-3xl  ' >
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping">{cartItems.length}</i>
            </Link>
            
          </ol>
          {/* <ol >
            <Link to="/cart" className="text-4xl  "> <i class="fa-solid fa-cart-shopping "> </i>
            <h1 className="absolute top-4 text-2xl right-12 ">({cartItems.length})</h1>
             </Link>
        </ol> */}
        </div>

        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)} className="text-white">
            {navOpen ? <HiOutlineXMark className='text-3xl font-bold' /> : <HiBars3 className='text-3xl font-bold'  />}
          </button>
        </div>

      </div>
      
      {navOpen && (
        <div className="md:hidden bg-purple-900 p-4">
          <input 
            type="text" 
            placeholder="Search for products" 
            className="px-10 py-2 rounded-md w-full mb-4"
          />
          <div className="flex flex-col space-y-2 text-white">
            <div className="flex justify-between items-center">
            <Link to={'/'}> <span>Home</span> </Link>
            </div>
            <div className="flex justify-between items-center">
            <Link to={'/dashboard/total'}> <span>Dashbord</span> </Link>
            </div>
            <Link to={'/about'}> <span>About</span> </Link> 
            <div className="flex items-center space-x-2">
              <FaUser  />
              <span>Login / Register</span>
            </div>
            <FaHeart className='hover:text-red-600' />
            <FaShoppingCart className='hover:text-black' />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
