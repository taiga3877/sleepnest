  import React, { useState } from 'react';
  import logo from '../assets/image.png';
  import { MdFavorite } from "react-icons/md";
  import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
  import { Link } from 'react-router-dom';
  import { useLikeStore } from '../../Page/UseLikeStore/UseLikeStore.js';

  const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { likedItems } = useLikeStore();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => {
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
      <div className='fixed top-0 w-full z-50 bg-white shadow-lg'>
        <div className='max-w-[1440px] w-full mx-auto flex items-center justify-between h-[80px] px-4'>
          <div>
            <Link to={'/'}>
              <img className='w-[150px] h-[50px] object-contain' src={logo} alt="logo" />
            </Link>
          </div>

          {/* Burger Icon — отображается на мобильных */}
          <div className='lg:hidden'>
            <button onClick={toggleMenu} className="text-3xl text-[#A17F4A]" aria-label="Toggle menu">
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-[30px]'>
          <ul className='flex items-center gap-[40px] text-lg'>
  <li>
    <Link 
      to="/" 
      className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Home
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  <li>
    <Link 
      to="/collectionpage" 
      className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Collection
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  <li>
    <Link 
      to="/aboutuspage" 
      className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      About Us
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  <li>
    <Link 
      to="/contactpage" 
      className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Contacts
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
</ul>

            <div className="flex items-center gap-[10px]">
              <Link to="/likepage" className="relative group">
                <span className="text-3xl text-red-500 group-hover:scale-110 transition-transform duration-200 ease-in-out">
                  <MdFavorite />
                </span>
                {likedItems.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-pulse">
                    {likedItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='lg:hidden bg-white px-4 py-4 shadow-md'>
            <ul className='flex flex-col gap-4 text-lg font-medium'>
              <li>
                <Link to="/" onClick={closeMenu} className="text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/collectionpage" onClick={closeMenu} className="text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300">Collection</Link>
              </li>
              <li>
                <Link to="/aboutuspage" onClick={closeMenu} className="text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contactpage" onClick={closeMenu} className="text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300">Contacts</Link>
              </li>
            </ul>
            <div className='flex items-center justify-start mt-4 relative'>
              <Link to="/likepage" onClick={closeMenu} className="text-3xl text-red-500 relative">
                <MdFavorite />
                {likedItems.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-pulse">
                    {likedItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Header;
    