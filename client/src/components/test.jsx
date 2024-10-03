import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Constant';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const OnSearch = async (e) => {
        e.preventDefault(); 
        if (!searchQuery) return;

        try {
            const response = await axios.post(`${BASE_URL}plant/searchPlant`, { q: searchQuery });
            setSearchResults(response.data); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-transparent text-black">
            <header className="container mx-auto">
                <nav className="flex items-center justify-between py-4">
                    <a href="#" className="text-black text-2xl">
                        <i className="ri-leaf-line text-green-500 mr-2"></i> Arboretum
                    </a>
                    <div className="flex items-center">
                        <div className="space-x-4">
                            <a href="#home" className="text-black hover:text-green-500">Home</a>
                            <a href="#products" className="text-black hover:text-green-500">Products</a>
                            <a href="#about" className="text-black hover:text-green-500">About</a>
                            <a href="#faqs" className="text-black hover:text-green-500">FAQs</a>
                        </div>
                        <form className="relative ml-4" onSubmit={OnSearch}>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    console.log("Current search query:", e.target.value);
                                }}
                                
                                className="px-3 py-1 rounded-lg border-black border-2 text-black focus:outline-none"
                            />
                            <button type="submit" className="ml-2 px-3 py-1 rounded-lg text-black focus:outline-none">Search</button>
                            {searchResults.length > 0 ? (
    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
        {searchResults.map((result, index) => (
            <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer text-black">
                {result.name} 
            </div>
        ))}
    </div>
) : (
    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
        <div className="p-2 text-black">No results found.</div>
    </div>
)}

                        </form>
                    </div>
                    <div className="ml-4">
                        {/* Theme change button */}
                        <i className="ri-moon-line text-2xl text-black hover:text-green-500"></i>
                        <div className="ml-4 cursor-pointer">
                            <i className="ri-menu-line text-2xl text-black"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
