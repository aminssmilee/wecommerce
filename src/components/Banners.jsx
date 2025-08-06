import { ArrowRight } from "lucide-react";

export default function Banners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Banner 1 */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Custom Development</h3>
                <p className="mb-4">Need something unique? Let's build it together.</p>
                <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-md flex items-center hover:bg-gray-100 transition">
                  Get Quote <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <img
                src="/placeholder.svg?text=Custom+Dev"
                alt="Custom Development"
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Maintenance Plans</h3>
                <p className="mb-4">Keep your website updated and secure.</p>
                <button className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-md flex items-center hover:bg-gray-100 transition">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <img
                src="/placeholder.svg?text=Maintenance"
                alt="Maintenance"
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
