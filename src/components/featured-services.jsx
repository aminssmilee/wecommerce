import { Star } from 'lucide-react'

export default function FeaturedServices() {
  const services = [
    { name: "Startup Landing Page", category: "Business", price: "$299", originalPrice: "$399", image: "startup landing page design", badge: "Sale" },
    { name: "Restaurant Website", category: "Food & Beverage", price: "$449", originalPrice: "$599", image: "restaurant website design", badge: "Popular" },
    { name: "SaaS Landing Page", category: "Technology", price: "$699", originalPrice: "", image: "saas software landing page", badge: "" },
    { name: "Real Estate Site", category: "Property", price: "$549", originalPrice: "", image: "real estate website design", badge: "New" },
    { name: "Fashion Store", category: "E-commerce", price: "$799", originalPrice: "$999", image: "fashion ecommerce website", badge: "Sale" },
    { name: "Fitness Landing", category: "Health & Fitness", price: "$399", originalPrice: "", image: "fitness gym website design", badge: "" },
    { name: "Agency Portfolio", category: "Creative", price: "$599", originalPrice: "", image: "creative agency portfolio", badge: "Featured" },
    { name: "Event Landing", category: "Events", price: "$349", originalPrice: "", image: "event conference landing page", badge: "" },
    { name: "Medical Website", category: "Healthcare", price: "$649", originalPrice: "", image: "medical healthcare website", badge: "New" },
    { name: "Education Portal", category: "Education", price: "$499", originalPrice: "$699", image: "education learning platform", badge: "Sale" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <div className="flex justify-center space-x-8">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-2">New Packages</button>
            <button className="text-gray-600 hover:text-blue-600">Best Selling</button>
            <button className="text-gray-600 hover:text-blue-600">Top Rated</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative">
                <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs text-center px-4">
                  {service.image}
                </div>
                {service.badge && (
                  <span
                    className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded text-white ${
                      service.badge === 'Sale' ? 'bg-red-500' :
                      service.badge === 'New' ? 'bg-green-500' :
                      'bg-blue-500'
                    }`}
                  >
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{service.category}</div>
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{service.name}</h3>

                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(4.8)</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-bold text-blue-600">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
