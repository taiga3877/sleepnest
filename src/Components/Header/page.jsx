import React, { useState } from 'react';
import logo from '../assets/image.png';
import { MdFavorite } from "react-icons/md";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useLikeStore } from '../../Page/UseLikeStore/UseLikeStore';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { likedItems } = useLikeStore();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='fixed top-0 w-full z-50 bg-white shadow-lg'>
      <div className='max-w-[1440px] w-full mx-auto flex items-center justify-between h-[80px] px-4'>
        <div>
          <img className='w-[150px] h-[50px] object-contain' src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-[30px]'>
          <ul className='flex items-center gap-[40px] text-lg'>
            <li className='flex items-center gap-[40px]'>
              <Link
                to={'/'}
                className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to={'/collectionpage'}
                className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
              >
                Collection
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to={'/aboutuspage'}
                className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
              >
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to={'/contactpage'}
                className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
              >
                Contacts
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
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

          {/* <select className="w-24 p-2 rounded-xl shadow-md border border-gray-300 bg-[#A17F4A] text-white focus:outline-none focus:ring-2 focus:ring-[#A17F4A] cursor-pointer">
            <option value="End">Eng</option>
            <option value="Ru">Ru</option>
            <option value="Uz">Uz</option>
          </select> */}
        </div>

        {/* Burger Icon */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className="text-3xl text-[#A17F4A]">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='lg:hidden bg-white px-4 py-4 shadow-md'>
          <ul className='flex flex-col gap-4 text-lg font-medium'>

            <Link
              to={'/'}
              className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to={'/collectionpage'}
              className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
            >
              Collection
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to={'/aboutuspage'}
              className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to={'/contactpage'}
              className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group"
            >
              Contacts
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </ul>

          <div className='flex justify-between items-center mt-4'>
            <Link to="/likepage" className="text-2xl text-[#c60000c4]">
              <MdFavorite />
            </Link>

            {/* <select className="w-24 p-2 rounded-xl shadow-md border border-gray-300 bg-[#A17F4A] text-white focus:outline-none focus:ring-2 focus:ring-[#A17F4A] cursor-pointer">
              <option value="End">Eng</option>
              <option value="Ru">Ru</option>
              <option value="Uz">Uz</option>
            </select> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
