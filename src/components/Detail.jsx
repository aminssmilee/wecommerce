"use client"

import { useState } from "react"
import logo from "../assets/pavicon/webcare.png"
import Navbar from "./navbar"
import TopBar from "./top-bar"

export default function Detail() {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("specifications")

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={logo || "/placeholder.svg"}
                alt="Digital Marketing Solution Pro"
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Digital Marketing Solution Pro</h1>
              <p className="text-lg text-gray-600 mb-4">Complete Digital Marketing & Web Development Package</p>
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
                Transform your business with our comprehensive Digital Marketing Solution Pro package. This all-in-one
                digital solution combines cutting-edge web development, strategic digital marketing, and advanced
                analytics to boost your online presence and drive measurable results. Perfect for businesses looking to
                establish a strong digital footprint and accelerate growth in today's competitive market.
              </p>
            </div>

            {/* Quantity */}
            <div>
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
            </div>

            {/* Price */}
            <div className="border-t pt-6">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">$2,499.99</span>
                <span className="text-lg text-gray-500 line-through">$3,999.99</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">38% OFF</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                  />
                </svg>
                Chat Admin
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("specifications")}
                className={`border-b-2 py-2 px-1 text-sm font-medium ${
                  activeTab === "specifications"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                SPECIFICATIONS
              </button>
              <button
                onClick={() => setActiveTab("description")}
                className={`border-b-2 py-2 px-1 text-sm font-medium ${
                  activeTab === "description"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                DESCRIPTION
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`border-b-2 py-2 px-1 text-sm font-medium ${
                  activeTab === "features"
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
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Package Type</span>
                    <span className="font-medium">Digital Marketing Pro</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Delivery Time</span>
                    <span className="font-medium">7-14 Business Days</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Website Pages</span>
                    <span className="font-medium">Up to 10 Pages</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">SEO Optimization</span>
                    <span className="font-medium">Advanced SEO Package</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Social Media</span>
                    <span className="font-medium">5 Platform Setup</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Content Creation</span>
                    <span className="font-medium">50 Posts/Month</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Analytics Dashboard</span>
                    <span className="font-medium">Real-time Reporting</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Support</span>
                    <span className="font-medium">24/7 Priority Support</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Warranty</span>
                    <span className="font-medium">12 Months Service</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Revisions</span>
                    <span className="font-medium">Unlimited Revisions</span>
                  </div>
                </div>
              </div>
            )}

            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Digital Transformation Package</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Digital Marketing Solution Pro is a comprehensive package designed to transform your business's
                    online presence from the ground up. This all-inclusive solution combines professional web
                    development, strategic digital marketing, and advanced analytics to create a powerful digital
                    ecosystem that drives real results.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Whether you're a startup looking to establish your digital footprint or an established business
                    ready to scale your online operations, this package provides everything you need to succeed in
                    today's competitive digital landscape. Our team of experts will work closely with you to understand
                    your unique business goals and create a customized strategy that delivers measurable ROI.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">Professional Website Development</h4>
                          <p className="text-sm text-gray-600">
                            Custom-designed, responsive website with up to 10 pages, optimized for performance and user
                            experience.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">Advanced SEO Strategy</h4>
                          <p className="text-sm text-gray-600">
                            Comprehensive SEO optimization including keyword research, on-page optimization, and
                            technical SEO.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">Social Media Management</h4>
                          <p className="text-sm text-gray-600">
                            Complete setup and management of 5 social media platforms with 50 custom posts per month.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">Content Marketing Strategy</h4>
                          <p className="text-sm text-gray-600">
                            Strategic content creation including blog posts, infographics, and multimedia content.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">Analytics & Reporting</h4>
                          <p className="text-sm text-gray-600">
                            Real-time analytics dashboard with monthly performance reports and actionable insights.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">24/7 Support & Maintenance</h4>
                          <p className="text-sm text-gray-600">
                            Priority support with dedicated account manager and ongoing website maintenance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
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
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === "features" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Features</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Responsive Web Design</h4>
                      <p className="text-sm text-gray-600">
                        Mobile-first, responsive design that looks perfect on all devices and screen sizes.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive tracking and reporting with Google Analytics 4 and custom dashboards.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Content Management</h4>
                      <p className="text-sm text-gray-600">
                        Easy-to-use CMS for managing your website content, blog posts, and media files.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mobile Optimization</h4>
                      <p className="text-sm text-gray-600">
                        Optimized for mobile performance with fast loading times and smooth user experience.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Security & SSL</h4>
                      <p className="text-sm text-gray-600">
                        Enterprise-level security with SSL certificates, regular backups, and malware protection.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
                      <p className="text-sm text-gray-600">
                        Lightning-fast loading speeds with CDN integration and image optimization.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Tools Included</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">Email Marketing Automation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">Social Media Scheduling Tools</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">Lead Generation Forms</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">Customer Relationship Management</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">A/B Testing Platform</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">Conversion Tracking</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">Heat Map Analytics</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">ROI Reporting Dashboard</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
