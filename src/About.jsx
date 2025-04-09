import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg flex flex-col md:flex-row items-center">
        
        {/* Left Section - Image */}
        <div className="w-1/3">
          <img
            src="/images/new-image.png"  // Update the image path here
            alt="New Profile"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - About Me Text */}
        <div className="md:w-2/3 md:ml-6 text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-sm text-gray-300">
            I'm a passionate Full Stack Developer with expertise in React.js and modern web technologies. 
            I love building user-friendly applications and solving complex problems through clean, efficient code.
          </p>
          <p className="text-sm text-gray-300 mt-4">
            My journey in web development has led me to work on various exciting projects, 
            from responsive web applications to complex full-stack solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
