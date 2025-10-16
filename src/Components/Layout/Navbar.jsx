import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
     <nav class="bg-gray-900 text-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <Link to="#" class="flex-shrink-0 flex items-center">
                        <img class="h-8 w-auto" src="https://tailwindflex.com/images/logo.svg" alt="Logo"/>
                        <span class="ml-2 text-xl font-bold">Navbar</span>
                    </Link>
                    <div class="hidden md:ml-6 md:flex md:space-x-8">
                        <Link to="/" class="text-white border-b-2 border-indigo-500 px-1 pt-1 inline-flex items-center text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/products" class="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-300 px-1 pt-1 inline-flex items-center text-sm font-medium">
                            Products
                        </Link>
                        <Link to="/cart" class="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-300 px-1 pt-1 inline-flex items-center text-sm font-medium">
                            Cart
                        </Link>
                        <Link to="#services" class="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-300 px-1 pt-1 inline-flex items-center text-sm font-medium">
                            Services
                        </Link>
                         <Link to="#contact" class="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-300 px-1 pt-1 inline-flex items-center text-sm font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
                <div class="flex items-center">
                    {/* <!-- Search --> */}
                    <div class="hidden md:flex md:ml-4">
                        <div class="relative">
                            <input type="text" class="bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64" placeholder="Search..."/>
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Profile dropdown --> */}
                    <div class="ml-3 relative hidden md:block">
                        <div>
                            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                            </button>
                        </div>
                        
                        {/* <!-- Dropdown menu, show/hide based on menu state --> */}
                        <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" id="user-menu" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <Link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Your Profile</Link>
                            <Link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Settings</Link>
                            <Link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Sign out</Link>
                        </div>
                    </div>
                    
                    {/* <!-- Mobile menu button --> */}
                    <div class="flex items-center md:hidden ml-4">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" id="mobile-menu-button">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state --> */}
        <div class="md:hidden hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <Link to="#" class="bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
                <Link to="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</Link>
                <Link to="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                <Link to="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</Link>
            </div>
            
            {/* <!-- Mobile search --> */}
            <div class="px-2 pt-2 pb-3">
                <div class="relative">
                    <input type="text" class="bg-gray-800 text-white w-full rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Search..."/>
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            
            {/* <!-- Mobile profile --> */}
            <div class="pt-4 pb-3 border-t border-gray-700">
                <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                    <div class="ml-3">
                        <div class="text-base font-medium text-white">Tom Cook</div>
                        <div class="text-sm font-medium text-gray-400">tom@example.com</div>
                    </div>
                </div>
                <div class="mt-3 px-2 space-y-1">
                    <Link to="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</Link>
                    <Link to="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</Link>
                    <Link to="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</Link>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar
