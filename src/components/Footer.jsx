import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold mb-2">About Us</h2>
                    <p className="text-gray-400">
                        Learn more about our mission, vision, and values.
                    </p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/courses" className="hover:underline">Courses</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Coursera. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;