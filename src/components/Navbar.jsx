import { Phone } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="bg-white rounded-full shadow-md px-8 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">WEBCARE</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
        </nav>

        {/* Button */}
        <div className="flex items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center space-x-2 shadow-sm">
            <Phone className="w-4 h-4" />
            <span>Book a Call</span>
          </button>
        </div>
      </div>
    </header>
  )
}
