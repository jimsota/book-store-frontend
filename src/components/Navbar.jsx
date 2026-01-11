import React from 'react'
import { href, Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoFemaleSharp, IoSearch } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarimg from "../assets/avatar.png";
import {useState } from "react";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigation = [
    {name: "Dashboard", href: "/dashboard"},
    {name: "Orders", href: "/Orders"},
    {name: "Cart Page", href: "/Cart"},
    {name: "Check Out", href: "/CheckOut"},
]

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] =useState(false)
  const cartItems =useSelector((state) => state.cart.cartItems);

  console.log(cartItems)
  
  const {currentUser, logout} = useAuth()


  const handleLogOut = () => {
     logout()
    
  }
  
  return (
    <header className= "max-w-screen-2xl mx-auto px-4 py-6">
      <nav className= "flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link>
          <HiMiniBars3CenterLeft  className= "size-6"/>
          </Link>
          </div>
        <div className="relative sm:w-72 w-40 space-x-2">
        <IoSearch className="absolute inline-block left-3 inset-y-2"/>
        <input type="text" placeholder="Search here" 
        className="bg-[#FAFAFA] w-full py-1 md:px-8 px-12 rounded-md focus:outline-none"/>
        </div>
        <div className="relative flex items-center md:space-x-2">
        
        <div>
          {
            currentUser ? <>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img src={avatarimg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
            </button>
            {

          isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-mg z-40"> 
              <ul className='py-2'>
                {
                  navigation.map((item) => (
                    <li key={item.name} onClick={() =>
                    setIsDropdownOpen(false)}>
                      <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                      {item.name}

                      </Link>
                    </li>
                  ))
                }
                <li>            
                  <button 
                  onClick={handleLogOut}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                </li>
              </ul>
            </div>
          )
         }
            </> : <Link to="/login"><HiOutlineUser className="size-6"/></Link>
          }
        </div>
        <button className="hidden sm:block">
        <IoMdHeartEmpty className="size-6"/>
        </button>
        <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
        <HiOutlineShoppingCart className="size-6"/>
        {
          cartItems.length > 0 ? <span className="text-sm font-smibold
           sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-smibold sm:ml-1">0</span>
        }
        
        </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
