import { Camera, Settings, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <header className="text-white bg-gray-800">
      <nav className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Camera className="w-6 h-6 text-white" />
          <h2 className="text-lg font-bold">Enhance AI</h2>
        </div>

        <ul className="flex space-x-6">
          <li className="flex items-center space-x-1">
            <Settings className="w-5 h-5" />
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li className="flex items-center space-x-1">
            <Mail className="w-5 h-5" />
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
