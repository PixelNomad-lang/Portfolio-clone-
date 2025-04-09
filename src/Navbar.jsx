const Navbar = () => {
  return (
    <nav className="bg-[#0F1624] text-white py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold">Adarsh Shukla.</div>
      <ul className="flex space-x-8">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Education</li>
        <li className="hover:text-gray-400 cursor-pointer">Projects</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
