import { ArrowRight } from 'lucide-react'
import produk from '../assets/pens1.jpg'

export default function ServiceCategories() {
  const services = [
    {
      title: "Business Landing",
      description: "Professional corporate websites",
      price: "Starting $499",
      badge: "New Service",
      badgeVariant: "bg-blue-100 text-blue-800",
    },
    {
      title: "E-commerce",
      description: "Online store solutions",
      price: "Starting $799",
      badge: "Popular",
      badgeVariant: "bg-purple-100 text-purple-800",
    },
    {
      title: "Portfolio",
      description: "Showcase your work",
      price: "Starting $399",
      badge: "Creative",
      badgeVariant: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "App Landing",
      description: "Mobile app promotion",
      price: "Starting $599",
      badge: "Trending",
      badgeVariant: "bg-green-100 text-green-800",
    },
    {
      title: "App Landing",
      description: "Mobile app promotion",
      price: "Starting $599",
      badge: "Trending",
      badgeVariant: "bg-green-100 text-green-800",
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={produk}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span
                  className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 ${service.badgeVariant}`}
                >
                  {service.badge}
                </span>

                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <p className="text-blue-600 font-semibold">{service.price}</p>

                <button className="mt-2 inline-flex items-center text-blue-600 font-medium hover:underline text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
