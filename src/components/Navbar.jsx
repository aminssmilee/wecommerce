import { Search, ShoppingCart, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">WebCareidn.</div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {/* <a href="#" className="text-gray-700 hover:text-blue-600">Home</a> */}
            {/* <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a> */}
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
