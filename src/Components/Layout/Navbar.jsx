import React from "react";
import { Link } from "react-router-dom";
import useStore from "/src/store/CartStore.js";
import { HashLink } from "react-router-hash-link"; 

const Navbar = () => {
  const { count } = useStore();

  return (
    <nav className="bg-white text-xl  h-25   z-99 sticky top-0 text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
        <div className=" text-xl flex justify-between h-16 items-center">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              className="h-15 w-15 rounded-full"
              src="/src/assets/images/gharelukinmel.png"
              alt="Logo"
            />
            <span className="text-xl font-bold">Gharelu-Kinmel</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 text-2xl items-center">
            <Link
              to="/"
              className="text-xl font-semibold hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-xl font-semibold hover:text-blue-600 transition"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="text-xl font-semibold hover:text-blue-600 transition"
            >
              Cart
            </Link>

            <HashLink
              smooth
              to="/#services"
              className="text-xl font-semibold hover:text-blue-600 transition"
            >
              Services
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              className="text-xl font-semibold hover:text-blue-600 transition"
            >
              Contact
            </HashLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative">
            
            <img
              src="/src/assets/images/cart.png"
              className="
            w-12 h-12
            
            "
            />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>

           
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
            
              type="button"
              className="text-gray-500 hover:text-blue-600 focus:outline-none  "
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
