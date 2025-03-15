import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <div className="text-blue-500 text-2xl">
                    Coursera
                </div>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
                    Explore
                </button>
                <span className="text-gray-700">Tell us your needs!</span>
            </div>

            <div className="flex space-x-8 ml-96">
                <Link to="/" className="text-lg font-semibold hover:text-blue-500">
                    Home
                </Link>
                <div className="text-lg font-semibold hover:text-blue-500">
                    <Link to="/online-degree">Online Degree</Link>
                </div>
                <div className="text-lg font-semibold hover:text-blue-500">
                    <Link to="/careers">Careers</Link>
                </div>
                <div className="text-lg font-semibold hover:text-blue-500">
                    <Link to="/courses">Courses</Link>
                </div>
            </div>

            <div className="flex space-x-4">
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
                    Login
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Navbar;