import React from 'react'

function Home() {
  return (
    
      <div className="bg-[#0F1624] text-white min-h-screen flex flex-col justify-center items-center p-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Pranay</span>{' '}
          <span className="text-purple-400">Koolwal</span>
        </h1>
        <p className="text-gray-400 text-lg">Full Stack Developer | React Specialist</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-xl hover:text-gray-300">🌐</a>
          <a href="#" className="text-xl hover:text-gray-300">🐙</a>
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="flex flex-wrap justify-center items-start w-full">
        {/* Left Side - Learning Path */}
        <div className="w-full md:w-1/2 mb-10">
          <h2 className="text-2xl font-semibold mb-6">My Learning Path</h2>
          <div className="space-y-6">
            {[
              { title: 'HTML/CSS', desc: 'Building blocks of web development' },
              { title: 'React.js', desc: 'Modern frontend development' },
              { title: 'Express.js', desc: 'Web application framework' },
              { title: 'JavaScript', desc: 'Dynamic web functionality' },
              { title: 'Node.js', desc: 'Server-side JavaScript' },
              { title: 'MongoDB', desc: 'NoSQL database' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
        <img
  src="./a1.gif"
  alt="Coding Illustration"
  className="w-80"
/>

        </div>
      </div>
    </div>
    
  )
}

export default Home
