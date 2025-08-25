import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import logo from "../assets/pavicon/webcare.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="bg-white bg-opacity-95 rounded-full shadow-md px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src={logo} alt="" srcset="" />
          </div>
          <span className="text-xl font-helvetica font-bold text-gray-900">WEBCARE.IDN</span>
        </div>

        {/* Menu Desktop */}
        {/* <nav className="hidden md:flex items-center space-x-10">
          <a href="/" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">FAQ</a>
        </nav> */}

        {/* Button Desktop */}
        <div className="hidden md:flex items-center">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center space-x-2 shadow-sm">
            <Phone className="w-4 h-4" />
            <span>Book a Call</span>
          </button>
        </div>

        {/* Hamburger Button Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-neutral-50 rounded-2xl shadow-md py-4 px-6 flex flex-col space-y-4 text-center">
          {/* <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</a> */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center justify-center space-x-2 shadow-sm">
            <Phone className="w-4 h-4" />
            <span>Book a Call</span>
          </button>
        </div>
      )}
    </header>
  )
}
