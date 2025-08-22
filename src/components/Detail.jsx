"use client"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar"
import TopBar from "./top-bar"
import { Footer } from "./Footer";

export default function Detail() {
  // const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("specifications")
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products`)
      .then(res => res.json())
      .then(data => {
        // data.data diasumsikan array produk
        const found = data.data.find(p => p.id === parseInt(id));
        setProduct(found || null);
      })
      .catch(err => console.error("Error fetching product detail:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading product detail...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <TopBar /> */}
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="grid lg:grid-cols-2 gap-12 mt-14 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.images?.[0] ? `http://127.0.0.1:8000/storage/${product.images[0].image_path}` : "/placeholder.jpg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {/* <button className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.subtitle}</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">(247 reviews)</span>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <p className="text-justify text-gray-700 leading-relaxed">
                {product.description || "No description available for this product."}
              </p>
            </div>

            {/* Quantity */}
            {/* <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Package Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="border border-gray-300 rounded-md p-2 hover:bg-gray-50 disabled:opacity-50"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border border-gray-300 rounded-md p-2 hover:bg-gray-50"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div> */}

            {/* Price */}
            <div className="border-t pt-6">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {Number(product.price).toLocaleString('id-ID',)}
                </span>

                {/* <span className="text-lg text-gray-500 line-through">$3,999.99</span> */}
                {/* <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">38% OFF</span> */}
              </div>
              <div className="flex flex-col gap-3">
                {/* Tombol Chat Admin */}
                <button
                  onClick={() => {
                    const adminPhone = "6283111247317"; // ganti nomor admin (format internasional tanpa +)
                    const toNumberFromString = (s) => {
                      if (s == null) return 0;
                      const cleaned = String(s).replace(/[^\d.-]/g, "");
                      return parseFloat(cleaned) || 0;
                    };

                    const priceNumber = toNumberFromString(product.price);
                    const formattedPrice = priceNumber.toLocaleString("id-ID", { minimumFractionDigits: 2 });

                    const message = `Halo Admin, saya tertarik dengan produk ${product.title} dengan harga Rp ${formattedPrice}. Mohon informasi lebih lanjut terkait ketersediaan dan cara pemesanannya. Terima kasih.`;
                    const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;

                    window.open(url, "_blank");
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                  Chat Admin
                </button>

                {/* Tombol Preview */}
                {/* <button
                  onClick={() => {
                    window.open(`/product/${product.id}`, "_blank");
                  }}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m0-6l-4.553 2.276a1 1 0 000 1.448L15 16m-4-6v6" />
                  </svg>
                  Preview Produk
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("specifications")}
                className={`border-b-2 py-2 px-1 text-sm font-medium ${activeTab === "specifications"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
              >
                SPECIFICATIONS
              </button>
              <button
                onClick={() => setActiveTab("description")}
                className={`border-b-2 py-2 px-1 text-sm font-medium ${activeTab === "description"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
              >
                DESCRIPTION
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`border-b-2 py-2 px-1 text-sm font-medium ${activeTab === "features"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
              >
                FEATURES
              </button>
            </nav>
          </div>

          <div className="mt-6">
            {/* Specifications Tab */}
            {activeTab === "specifications" && (
              <div className="grid md:grid-cols-2 gap-6">
                {product.specifications && product.specifications.length > 0 ? (
                  // Bagi array spesifikasi jadi dua kolom secara merata
                  <>
                    <div className="space-y-3">
                      {product.specifications
                        .filter((_, i) => i % 2 === 0) // indeks genap ke kolom kiri
                        .map(spec => (
                          <div key={spec.id} className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">{spec.label}</span>
                            <span className="font-medium">{spec.value}</span>
                          </div>
                        ))}
                    </div>
                    <div className="space-y-3">
                      {product.specifications
                        .filter((_, i) => i % 2 === 1) // indeks ganjil ke kolom kanan
                        .map(spec => (
                          <div key={spec.id} className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">{spec.label}</span>
                            <span className="font-medium">{spec.value}</span>
                          </div>
                        ))}
                    </div>
                  </>
                ) : (
                  <p className="text-gray-600">No specifications available.</p>
                )}
              </div>

            )}

            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.subtitle}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    {product.long_description || "No detailed description available for this product."}
                  </p>
                </div>

                {/* Includes Tab */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold  text-gray-900 mb-4">What's Included</h3>
                  <div className="space-y-3 border-t border-gray-200">
                    {product.includes && product.includes.length > 0 ? (
                      product.includes.map((include,) => (
                        <div
                          key={include.id}
                          className="flex items-center gap-3 py-2 border-b border-gray-200 last:border-b-0"
                        >
                          <div className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="text-gray-700 font-medium">{include.item}</span>
                            {include.description && (
                              <p className="text-sm text-gray-600">{include.description}</p>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">No included items available.</p>
                    )}
                  </div>
                </div>


                {/* <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Digital Solution?</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Fast Results</h4>
                        <p className="text-sm text-gray-600">
                          See measurable improvements in your online presence within the first 30 days
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Proven Strategy</h4>
                        <p className="text-sm text-gray-600">
                          Battle-tested methodologies that have helped 500+ businesses grow
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg
                            className="w-6 h-6 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Expert Team</h4>
                        <p className="text-sm text-gray-600">
                          Dedicated team of certified digital marketing professionals
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            )}

            {/* Features Tab */}
            {activeTab === "features" && (
              <div className="space-y-8">
                {/* Core Features */}
                {/* Features Tab */}
                {activeTab === "features" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Features</h3>
                    <div className="space-y-3 border-t border-gray-200">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 py-2 border-b border-gray-200 last:border-b-0 justify-between">
                          <div className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature.feature || "No Feature"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}


                {/* Marketing Tools Included */}
                {product.marketingTools && product.marketingTools.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Tools Included</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {product.marketingTools.map((tool, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div
                              className={`w-2 h-2 rounded-full ${tool.color || "bg-blue-500"}`}
                            ></div>
                            <span className="text-gray-700">{tool.name || "No Name"}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


