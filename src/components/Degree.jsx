import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Image1 from '../assets/masterengering.jpg';
import Image2 from '../assets/masterscience.jpg';
import Image3 from '../assets/masterbusiness.jpg';
import Image4 from '../assets/masterdata.jpg';
import { IoIosArrowForward } from "react-icons/io";

const Degree = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <p className='font-bold mb-3 text-lg'>Degree Programs</p>
            <h2 className="text-4xl font-bold mb-4">Get a head start on a degree today</h2>
            <p className="text-gray-800 mb-2">
                With these programs, you can build valuable skills, earn career credentials, and make progress toward a degree before you even enroll.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Master of Engineering Card */}
                <Link to="/enrollmentsection" className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                    <img src={Image1} alt="Master of Engineering" className="w-full h-40 object-cover rounded-md mb-4" />
                    <p className="text-gray-500">University of Colorado Boulder</p>
                    <h3 className="font-semibold">Master of Engineering</h3>
                    <p className="text-gray-500 mt-8">Project</p>
                </Link>

                {/* Master of Science in Computer Science Card */}
                <div className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                    <img src={Image2} alt="Master of Science in Computer Science" className="w-full h-40 object-cover rounded-md mb-4" />
                    <p className="text-gray-500">University of Colorado Boulder</p>
                    <h3 className="font-semibold">Master of Science in Computer Science</h3>
                    <p className="text-gray-500 mt-8">Project</p>
                </div>

                {/* Master of Business Administration Card */}
                <div className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                    <img src={Image3} alt="Master of Business Administration" className="w-full h-40 object-cover rounded-md mb-4" />
                    <p className="text-gray-500">University of Illinois Urbana-Champaign</p>
                    <h3 className="font-semibold">Master of Business Administration</h3>
                    <p className="text-gray-500 mt-8">Course</p>
                </div>

                {/* Master of Science in Data Science Card */}
                <div className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                    <img src={Image4} alt="Master of Science in Data Science" className="w-full h-40 object-cover rounded-md mb-4" />
                    <p className="text-gray-500">University of Colorado Boulder</p>
                    <h3 className="font-semibold">Master of Science in Data Science</h3>
                    <p className="text-gray-500 mt-8">Course</p>
                </div>
            </div>
            <div className="flex space-x-4 mt-4">
                <Link
                    to="/join"
                    className="bg-blue-500 text-white px-7 py-2 rounded-md hover:bg-blue-600 transition">
                    Show More
                </Link>
                <Link
                    to="/business"
                    className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition flex items-center">
                    View all
                    <IoIosArrowForward className="ml-1" />
                </Link>
            </div>
        </div>
    );
};

export default Degree;