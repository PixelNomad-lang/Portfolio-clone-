import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-10">
      <div className="flex justify-between items-center">
        {/* Left Section: Name & Title */}
        <div>
          <h2 className="text-lg font-semibold">Pranay Koolwal</h2>
          <p className="text-sm">Full Stack Developer | React Specialist</p>
        </div>

        {/* Right Section: Icons */}
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-xl hover:text-gray-400" />
          </a>
          <a href="mailto:email@example.com">
            <FaEnvelope className="text-white text-xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-xl hover:text-gray-400" />
          </a>
        </div>
      </div>

      {/* Centered Text */}
      <div className="text-center mt-4 text-xs">
        <p>© 2025 Pranay Koolwal. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, and Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
