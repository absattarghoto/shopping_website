import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      {/* Restrict width to 1200px */}
      <div className="max-w-[90vw] mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Left - Logo */}
          <div className="text-4xl font-bold text-[#101913]">As<span className="text-[#3C9379]">asg</span></div>

          {/* Center - Navigation Links (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-[#3C9379]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#3C9379]">About</Link></li>
            <li><Link to="/services" className="hover:text-[#3C9379]">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#3C9379]">Contact</Link></li>
          </ul>

          {/* Right - Buttons (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-4">
            <Link to="/login" className="px-4 py-2 border border-[#3C9379] text-[#3C9379] rounded-lg hover:bg-[#3C9379] hover:text-white transition">Login</Link>
            <Link to="/register" className="px-4 py-2 bg-[#3C9379] text-white rounded-lg hover:bg-[#3C9379] transition">Register</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg absolute top-16 left-0 w-full h-screen">
            <ul className="flex flex-col space-y-4 py-4 px-6">
              <li><Link to="/" className="block text-gray-700 hover:text-[#3C9379]" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="block text-gray-700 hover:text-[#3C9379]" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/services" className="block text-gray-700 hover:text-[#3C9379]" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link to="/contact" className="block text-gray-700 hover:text-[#3C9379]" onClick={() => setIsOpen(false)}>Contact</Link></li>
              <div className="flex flex-col space-y-3">
                <Link to="/login" className="px-4 py-2 border border-[#3C9379] text-[#3C9379] rounded-lg text-center" onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/register" className="px-4 py-2 bg-[#3C9379] text-white rounded-lg text-center" onClick={() => setIsOpen(false)}>Register</Link>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
