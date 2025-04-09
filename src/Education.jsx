import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <BookOpenIcon className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
          <p>
            I am currently pursuing my <a href="#" className="text-blue-400">Bachelor of Computer Applications (BCA)</a> 
            at <a href="#" className="text-blue-400">SS Jain Subodh College, Jaipur</a>. I am in my first year and have 
            been actively involved in various projects and activities that enhance my learning experience.
          </p>
          <p className="mt-4">
            I completed my <a href="#" className="text-blue-400">12th grade</a> from 
            <a href="#" className="text-blue-400"> Saint Soldier Public School</a> with a score of 
            <span className="text-blue-400"> 77.2%</span> in 2024. During my school years, I developed a strong foundation 
            in computer science and mathematics.
          </p>
          <p className="mt-4">
            I also completed my <a href="#" className="text-blue-400">10th grade</a> from 
            <a href="#" className="text-blue-400"> Saint Soldier Public School</a> with a score of 
            <span className="text-blue-400"> 70%</span> in 2022. My interest in technology and programming started during my 
            high school years, and I have been passionate about it ever since.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
