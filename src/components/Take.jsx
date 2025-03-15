import React from 'react';
import Image1 from '../assets/Image-Next-Step.png';

const Take = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 bg-white mt-10">
            <div className="md:w-1/2">
                <img
                    src={Image1}
                    alt="Learn"
                    className="mx-auto h-auto rounded-lg"
                />
            </div>
            <div className="md:w-1/2 md:pl-8">
                <h1 className="text-4xl font-bold mb-4">Take the next step toward your personal and professional goals with Coursera.</h1>
                <p className="text-sm mb-6">
                Join now to receive personalized recommendations from the full Coursera catalog.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="/login"
                        className="bg-blue-500 text-white px-7 py-4 rounded-md hover:bg-blue-600 transition">
                        Join For Free
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Take;