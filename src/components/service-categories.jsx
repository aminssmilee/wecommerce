import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getProducts } from "../services/api";

export default function ServiceCategories() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => {
        console.log("Products API:", data);
        setServices(data); // langsung simpan array product
      })
      .catch(err => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  if (services.length === 0) {
    return <p className="text-center py-10">No products found.</p>;
  }

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
                  src={`http://127.0.0.1:8000/storage/${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span
                  className="inline-block text-xs font-semibold px-2 py-1 rounded mb-2 bg-blue-100 text-blue-800"
                >
                  Product
                </span>

                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <p className="text-blue-600 font-semibold">
                  Rp {parseInt(service.price || 0).toLocaleString()}
                </p>

                <button className="mt-2 inline-flex items-center text-blue-600 font-medium hover:underline text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
