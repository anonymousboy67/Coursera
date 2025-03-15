import React from 'react';
import Image1 from '../assets/hero.png';

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between p-8 bg-white mt-10">
            <div className="md:w-1/2">
                <h1 className="text-5xl font-bold mb-4">Choose your path. Grow your career.</h1>
                <p className="text-sm mb-6">
                    Expert-led programs. Job-ready certificates. 10,000+ ways to grow. Learn in Spanish, Portuguese, and more with AI-translated courses—now 60% off for an annual subscription.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="/login"
                        className="bg-blue-500 text-white px-7 py-4 rounded-md hover:bg-blue-600 transition">
                        Join For Free
                    </a>
                    <a
                        href="/login"
                        className="border border-blue-500 text-blue-600 px-6 py-4 rounded-md hover:bg-blue-600 hover:text-white transition">
                        Try Courses for Business
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
                <img
                    src={Image1}
                    alt="Learn"
                    className="mx-auto h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default Hero;