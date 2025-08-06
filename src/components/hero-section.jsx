import React from "react";
import baner from "../assets/pens1.jpg";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
      style={{
        backgroundImage: `url(${baner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-medium mb-4">Premium Web Solutions</p>

            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              LANDING PAGES <br />
              <span className="text-blue-600">THAT CONVERT</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Starting from $299 - Professional Design
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition">
                Get Started
              </button>

              <button className="px-6 py-3 border border-gray-300 text-lg font-medium rounded-md hover:bg-gray-100 transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
