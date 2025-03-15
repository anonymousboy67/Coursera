import React from 'react';

const ExploreCoursera = () => {
    const categories = [
        { title: "Data Science", courses: 425 },
        { title: "Business", courses: 1005 },
        { title: "Computer Science", courses: 606 },
        { title: "Health", courses: 471 },
        { title: "Social Sciences", courses: 200 },
        { title: "Personal Development", courses: 137 },
        { title: "Arts and Humanities", courses: 338 },
        { title: "Physical Sciences and Engineering", courses: 423 },
        { title: "Language Learning", courses: 700 },
        { title: "Information Technology", courses: 150 },
        { title: "Math and Logic", courses: 70 },
    ];

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Explore Coursera</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{category.title}</h3>
                            <p className="text-gray-600">{category.courses} courses</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCoursera;