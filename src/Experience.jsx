import React from 'react'

function Experience() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-white text-2xl font-bold text-center mb-4">
          Experience
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-blue-400 text-2xl">📂</span>
          <h3 className="text-lg text-gray-300 font-semibold">Experience</h3>
        </div>
        <p className="text-gray-400 mt-2">
          I worked as an intern for 3 months to build an e-commerce application
          using React.js.
        </p>
        <p className="text-gray-400 mt-2">
          During this internship, I gained valuable experience in developing
          user-friendly interfaces, managing state with Redux, and integrating
          APIs to fetch and display data.
        </p>
        <a
          href="#"
          className="block text-blue-400 mt-4 text-sm hover:underline flex items-center gap-1"
        >
          Visit Website 🌐
        </a>
      </div>
    </div>
    </div>
  )
}

export default Experience
